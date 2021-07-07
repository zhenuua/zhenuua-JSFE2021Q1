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

export default class App extends React.Component<MyProps, MyState> {
  state = { activePage: "MainPage" }

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
    console.log(this.state.activePage);
    let indexCategory = cardCategories
      .findIndex((element) => {
        if (this.state.activePage === element.nameCategory) {
          return true
        }
      })

    let mainSection = <CardGrid itemsCategories={this.getItems()} functionFromPerent={(category: string) => { this.changeCategory(category) }} />

    if (this.state.activePage === 'MainPage') {
      mainSection = <CardGrid itemsCategories={this.getItems()} functionFromPerent={(category: string) => { this.changeCategory(category) }} />
    } else if (this.state.activePage === 'Stats') {
      mainSection = <Stats />
    } else if (this.state.activePage === cardCategories[indexCategory].nameCategory) {
      mainSection = <CardGrid itemsCategories={this.getCards(indexCategory)} functionFromPerent={() => { }} />
    } else {
      mainSection = <div>{this.state.activePage}</div>
    }
    return (
      <div className='wrapper'>
        <Header functionFromPerent={(category: string) => { this.changeCategory(category) }} />
        {mainSection}
        <Footer />
      </div>

    )
  }
}