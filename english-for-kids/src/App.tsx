import React from 'react';
import Header from './components/Header/header';
import CardGrid from './components/MainPage/CardGrid';
import Footer from './components/Footer/footer';
import Stats from './components/Stats/stats';
import GameOver from './components/GameOver/GameOver'
import { cardCategories, cards } from './assets/cards';

import './styles.scss'

interface MyProps {
}
interface MyState {
  activePage: string,
  activeGameMode: string,

  // isPlaying: boolean
}

const TRAIN_GAME_MODE = "train";
const PLAY_GAME_MODE = "play";
const DEFAULT_PAGE = "MainPage";
const PAGE_STATS = 'Stats';


export default class App extends React.Component<MyProps, MyState> {


  state = { activePage: DEFAULT_PAGE, activeGameMode: TRAIN_GAME_MODE }

  getItems() {
    return cardCategories.map((item) => {
      return {
        title: item.nameCategory,
        imgSrc: item.image
      }
    })
  }
  getCards(indexCategory: number) {
    //cards[indexCategory].sort(() => Math.random() - 0.5);


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


        activeGameMode={this.state.activeGameMode} //может убрать
        activePage={this.state.activePage} //может убрать
      />

    if (this.state.activePage === DEFAULT_PAGE) {
      mainSection =
        <CardGrid
          itemsCategories={this.getItems()}
          changeCategory={(category: string) => { this.changeCategory(category) }}


          activeGameMode={this.state.activeGameMode}//может убрать
          activePage={this.state.activePage}//может убрать
        />

    } else if (this.state.activePage === PAGE_STATS) {
      mainSection = <Stats />
    } else if (this.state.activePage === 'GameOver') {
      mainSection = 
      <GameOver 
        changeCategory={(category: string) => { this.changeCategory(category) }}
      />
    } else if (this.state.activePage === cardCategories[indexCategory].nameCategory) {
      mainSection =
        <CardGrid
          itemsCategories={this.getCards(indexCategory)}
          changeCategory={(category: string) => { this.changeCategory(category) }}
          activeGameMode={this.state.activeGameMode}
          arrSoudsCategory={this.getSoudsCategory(indexCategory)}
          activePage={this.state.activePage}
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