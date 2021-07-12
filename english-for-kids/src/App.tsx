import React from 'react';
import Header from './components/Header/header';
import CardGrid from './components/MainPage/CardGrid';
import Footer from './components/Footer/footer';
import Stats from './components/Stats/stats';
import GameOver from './components/GameOver/GameOver'
import { cardCategories, cards } from './assets/cards';
import { Views } from './assets/constants';

import './styles.scss'

interface MyProps {
}
interface MyState {
  activePage: string,
  activeGameMode: string,
  mistakes: number
}

export default class App extends React.Component<MyProps, MyState> {

  state = {
    activePage: Views.MAIN,
    activeGameMode: Views.TRAIN_MODE,
    mistakes: 0
  }

  getItems() {
    return cardCategories.map((item) => {
      return {
        title: item.nameCategory,
        imgSrc: item.image
      }
    })
  }
  getCards(indexCategory: number) {
    return cards[indexCategory].map((item) => {
      return {
        title: item.word,
        imgSrc: item.image,
        translation: item.translation,
        audioSrc: item.audioSrc
      }
    })
  }
  getSoudsCategory(indexCategory: number) {
    let arrSoudsCategory: string[] = []
    for (let i = 0; i < cards[indexCategory].length; i++) {
      arrSoudsCategory.push(cards[indexCategory][i].audioSrc)
    }
    return arrSoudsCategory.sort(() => Math.random() - 0.5);
  }
  changeCategory(category: string) {
    this.setState({ activePage: category })
  }
  changeGameModeApp(gameMode: string) {
    this.setState({ activeGameMode: gameMode })
  }
  countMistakes(mistakes: number) {
    this.setState({ mistakes: mistakes })
  }


  render() {
    let indexCategory = cardCategories
      .findIndex((element) => {
        if (this.state.activePage === element.nameCategory) {
          return true
        }
      })

    let mainSection =
      <CardGrid
        itemsCategories={this.getItems()}
        changeCategory={(category: string) => { this.changeCategory(category) }}
        activeGameMode={this.state.activeGameMode}
        activePage={this.state.activePage}
      />

    if (this.state.activePage === Views.MAIN) {
      mainSection =
        <CardGrid
          itemsCategories={this.getItems()}
          changeCategory={(category: string) => { this.changeCategory(category) }}
          activeGameMode={this.state.activeGameMode}
          activePage={this.state.activePage}
        />

    } else if (this.state.activePage === Views.STATS) {
      mainSection = <Stats />
    } else if (this.state.activePage === Views.GAMEOVER) {
      mainSection =
        <GameOver
          changeCategory={(category: string) => { this.changeCategory(category) }}
          mistakes={this.state.mistakes}
        />
    } else if (this.state.activePage === cardCategories[indexCategory].nameCategory) {
      mainSection =
        <CardGrid
          itemsCategories={this.getCards(indexCategory)}
          changeCategory={(category: string) => { this.changeCategory(category) }}
          activeGameMode={this.state.activeGameMode}
          arrSoudsCategory={this.getSoudsCategory(indexCategory)}
          activePage={this.state.activePage}
          countMistakes={(mistakes: number) => { this.countMistakes(mistakes) }}
        />
    }

    return (
      <div className='wrapper'>
        <Header
          changeCategory={(category: string) => { this.changeCategory(category) }}
          changeGameModeApp={(gameMode: string) => { this.changeGameModeApp(gameMode) }}
          gameModeName={this.state.activeGameMode}
        />
        {mainSection}
        <Footer />
      </div>

    )
  }
}