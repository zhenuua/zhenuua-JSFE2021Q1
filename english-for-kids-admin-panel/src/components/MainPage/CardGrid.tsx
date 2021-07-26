import React from 'react';
import Card from './Card';
import { Views, ButtonsNames, linkAudio } from '../../assets/constants';

import './cardGrid.scss'

interface Categories {
  title: string,
  imgSrc: string,
  translation?: string,
  audioSrc?: string,
  arrSoudsCategory?: string[]
}
interface MyState {
  nameButtonGame: string,
  currentSound: number
  startGameActivePage: string,
  startGameactiveGameMode: string,
  isGameOver: boolean,
  errorsClick: number
}
interface MyProps {
  itemsCategories: Categories[],
  activeGameMode: string,
  activePage: string,
  arrSoudsCategory?: string[],
  changeCategory: (page: string) => void,
  countMistakes?: (mistakes: number) => void
}

export default class CardGrid extends React.Component<MyProps, MyState> {

  state = {
    nameButtonGame: ButtonsNames.START_GAME,
    startGameActivePage: '',
    startGameactiveGameMode: '',
    currentSound: 0,
    isGameOver: false,
    errorsClick: 0
  }

  static getDerivedStateFromProps(nextProps: MyProps, prevState: MyState) {
    if (nextProps.activeGameMode !== prevState.startGameactiveGameMode ||
      nextProps.activePage !== prevState.startGameActivePage) {
      return { ...prevState, nameButtonGame: ButtonsNames.START_GAME, errorsClick: 0 }
    }
    return {
      ...prevState
    };
  }

  componentDidUpdate(prevProps: MyProps, prevState: MyState) {
    if (this.state.currentSound !== prevState.currentSound) {
      this.playCurrentSound()
    }
  }

  playAudio(audioSrc: string) {
    const audio = new Audio();
    audio.src = audioSrc;
    audio.currentTime = 0;
    audio.play();
  }

  compaireCurrentSound = (sound: string): boolean => {

    if (this.props.arrSoudsCategory &&
      this.props.arrSoudsCategory[this.state.currentSound] === sound) {
      this.playAudio(linkAudio.CORRECT);
      this.setState({ currentSound: this.state.currentSound + 1 });
      return true
    } else {
      this.playAudio(linkAudio.ERROR)
      this.setState({ errorsClick: this.state.errorsClick + 1 })
      return false
    }
  }

  playCurrentSound() {
    if (this.props.arrSoudsCategory)
      if (this.state.currentSound > this.props.arrSoudsCategory.length - 1) {
        if (this.props.countMistakes)
          this.props.countMistakes(this.state.errorsClick)
        this.setState(
          {
            nameButtonGame: ButtonsNames.START_GAME,
            currentSound: 0,
            isGameOver: true
          }
        )
      } else {
        this.playAudio(this.props.arrSoudsCategory[this.state.currentSound])
      }
  }

  startGame(activeGameMode: string, activePage: string) {
    this.playCurrentSound()
    this.setState(
      {
        nameButtonGame: ButtonsNames.REPEAT_WORD,
        startGameactiveGameMode: activeGameMode,
        startGameActivePage: activePage
      }
    )
  }

  render() {

    if (this.state.isGameOver === true) {
      this.setState({ isGameOver: false });
      this.props.changeCategory(Views.GAMEOVER)
    }
    return (
      <section className='main'>
          <div className="cards-field wrapper">
            {this.props.itemsCategories.map((item) => {
              return (
                <Card
                  key={item.title}
                  activeGameMode={this.props.activeGameMode}
                  title={item.title}
                  imgSrc={item.imgSrc}
                  translation={item.translation}
                  audioSrc={item.audioSrc}
                  changeCategory={(page: string) => {
                    this.props.changeCategory(page)
                  }}
                  compaireCurrentSound={this.compaireCurrentSound}
                  nameButtonGame={this.state.nameButtonGame}
                />)
            })}
          </div>
          <button
            className=
            {
              `button__game${this.props.activeGameMode === 'train' ||
                this.props.activePage === Views.MAIN ? '__none' : ''}`
            }
            onClick={() => {
              this.startGame(this.props.activeGameMode, this.props.activePage)
            }}
          >
            {this.state.nameButtonGame}
          </button>

      </section>
    )
  }
}