import React from 'react';
import Card from './Card';

import './cardGrid.scss'

interface Categories {
  title:string, 
  imgSrc:string,
  translation?: string,
  audioSrc?: string
  
}
interface MyState {
  
}
interface MyProps {
  itemsCategories: Categories[],
  changeCategory: (page: string)=>void,
  activeGameMode?: string
}


export default class CardGrid extends React.Component<MyProps, MyState> {

//{this.functionFromPerent(item.title)
  render(){
    return (
      <section className="cards-field">
        {this.props.itemsCategories.map((item) => {
          return (
          <Card 
            key={item.title}
            activeGameMode={this.props.activeGameMode}
            title={item.title}
            imgSrc={item.imgSrc}
            translation={item.translation}
            audioSrc = {item.audioSrc}
            changeCategory={(page:string)=>{
              this.props.changeCategory(page)
            }}
          />)
          })}
      </section>
     
    )
  }
}