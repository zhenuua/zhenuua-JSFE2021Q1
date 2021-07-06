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
  functionFromPerent: (page: string)=>void
}


export default class CardGrid extends React.Component<MyProps, MyState> {

//{this.functionFromPerent(item.title)
  render(){
    return (
      <section className="cards-field">
        {this.props.itemsCategories.map((item) => {
          return (
          <Card title={item.title} imgSrc={item.imgSrc}
            functionFromPerent={(page:string)=>{
              this.props.functionFromPerent(page)
            }}
          />)
          })}
      </section>
     
    )
  }
}