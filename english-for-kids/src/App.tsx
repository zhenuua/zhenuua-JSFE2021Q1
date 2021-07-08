import React from 'react';
import Header from './components/Header/header';
import CardGrid from './components/MainPage/CardGrid';
import Footer from './components/Footer/footer';
import Stats from './components/Stats/stats';
import { cardCategories, cards } from './assets/cards';

import './styles.scss'

interface MyProps {
}
interface MyState {
  activePage: string
}

const DEFAULT_CATEGORY = "MainPage";
const PAGE_STATS = 'Stats';

export default class App extends React.Component<MyProps, MyState> {

  
  state = { activePage: DEFAULT_CATEGORY }

  getItems() {
    return cardCategories.map((item) => { return { title: item.nameCategory, imgSrc: item.image } })
  }
  getCards(indexCategory: number) {
    cards[indexCategory].sort(() => Math.random() - 0.5);
    return cards[indexCategory].map((item) => { return { title: item.word, imgSrc: item.image, translation: item.translation, audioSrc: item.audioSrc } })
  }
  changeCategory(category: string) {
    this.setState({ activePage: category })
  }

  render() {
    let indexCategory = cardCategories
      .findIndex((element) => {
        if (this.state.activePage === element.nameCategory) {
          return true
        }
      })

    let mainSection = <CardGrid itemsCategories={this.getItems()} changeCategory={(category: string) => { this.changeCategory(category) }} />

    if (this.state.activePage === DEFAULT_CATEGORY) {
      mainSection = <CardGrid itemsCategories={this.getItems()} changeCategory={(category: string) => { this.changeCategory(category) }} />
    } else if (this.state.activePage === PAGE_STATS) {
      mainSection = <Stats />
    } else if (this.state.activePage === cardCategories[indexCategory].nameCategory) {
      mainSection = <CardGrid itemsCategories={this.getCards(indexCategory)} changeCategory={() => { }} />
    } else {
      mainSection = <div>{this.state.activePage}</div>
    }
    return (
      <div className='wrapper'>
        <Header changeCategory={(category: string) => { this.changeCategory(category) }} />
        {mainSection}
        <Footer />
      </div>

    )
  }
}