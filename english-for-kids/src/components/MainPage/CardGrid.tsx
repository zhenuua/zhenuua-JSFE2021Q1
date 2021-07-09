import React from 'react';
import Card from './Card';

import './cardGrid.scss'

interface Categories {
  title: string,
  imgSrc: string,
  translation?: string,
  audioSrc?: string
}
interface MyState {
  nameButtonGame: string
}
interface MyProps {
  itemsCategories: Categories[],
  changeCategory: (page: string) => void,
  activeGameMode?: string,
  activePage?: string
}


export default class CardGrid extends React.Component<MyProps, MyState> {

  state = {nameButtonGame: 'Start Game'}

  startGame(){
    
    this.setState({nameButtonGame: 'Repeat Word'})
    
    // if (this.props.activeGameMode==='train'){
    //   this.setState({nameButtonGame: 'Start Game'})
    // }
  }

  render() {
   
    return (
      <div>
        <section className="cards-field">
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
              />)
          })}
        </section>
        <button
          className={`button__game${this.props.activeGameMode === 'train' || this.props.activePage === 'MainPage' ? '__none' : ''}`}
          onClick={()=>{
            this.startGame()
          }}
          >
          
          {this.state.nameButtonGame}
        </button>
      </div>


    )
  }
}