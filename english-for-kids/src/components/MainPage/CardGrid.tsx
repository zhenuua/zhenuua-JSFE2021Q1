import React from 'react';
import Card from './Card';

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
  opensCard: number
}
interface MyProps {
  itemsCategories: Categories[],
  changeCategory: (page: string) => void,
  activeGameMode: string,
  activePage: string,
  arrSoudsCategory?: string[],
  countMistakes?: (mistakes: number) => void
}


export default class CardGrid extends React.Component<MyProps, MyState> {

  state = {
    nameButtonGame: 'Start Game',
    startGameActivePage: '',
    startGameactiveGameMode: '',
    currentSound: 0,
    isGameOver: false,
    opensCard: 0
  }
  static getDerivedStateFromProps(nextProps: MyProps, prevState: MyState) { //до рпендара
    if (nextProps.activeGameMode !== prevState.startGameactiveGameMode ||
      nextProps.activePage !== prevState.startGameActivePage) {
      return { ...prevState, nameButtonGame: 'Start Game', opensCard: 0 }
    }
    return {
      ...prevState
    };
  }

  componentDidUpdate(prevProps: MyProps, prevState: MyState) { //после рендера
    if (this.state.currentSound !== prevState.currentSound ) { //!!!!!!!!!!this.props.arrSoudsCategory && && this.state.currentSound <= this.props.arrSoudsCategory.length
      this.playCurrentSound()
    }
  }

  playAudio(audioSrc: string) {
    const audio = new Audio();
    audio.src = audioSrc;
    audio.currentTime = 0;
    audio.play();
  }

  // stopGame(activeGameMode: string, activePage: string) {
  //   if (this.state.startGameactiveGameMode !== activeGameMode || this.state.startGameActivePage !== activePage) {
  //     this.setState({ nameButtonGame: 'Start Game' })
  //   }
  // }

  compaireCurrentSound = (sound: string): boolean => {

    // this.setState({opensCard: this.state.opensCard + 1})
    // console.log(1, this.state.opensCard);

    if (this.props.arrSoudsCategory &&
      this.props.arrSoudsCategory[this.state.currentSound] === sound) {
      this.playAudio('audio/correct.mp3');
      this.setState({ currentSound: this.state.currentSound + 1 });
      // this.setState({ opensCard: this.state.opensCard + 1 })

      return true
    } else {
      this.playAudio('audio/error.mp3')
      this.setState({ opensCard: this.state.opensCard + 1 })
      return false
    }
  }


  playCurrentSound() {
    if (this.props.arrSoudsCategory)

      if (this.state.currentSound > this.props.arrSoudsCategory.length - 1) {
        if (this.props.countMistakes)
          this.props.countMistakes(this.state.opensCard)
        this.setState(
          {
            nameButtonGame: 'Start Game',
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
        nameButtonGame: 'Repeat Word',
        startGameactiveGameMode: activeGameMode,
        startGameActivePage: activePage
      }
    )
  }

  render() {

    if (this.state.isGameOver === true) {
      console.log('go main');
      this.setState({ isGameOver: false });
      this.props.changeCategory('GameOver')

    }
    return (
      <section className='main'>
        <div className="cards-field">
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
              this.props.activePage === 'MainPage' ? '__none' : ''}`
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