import React from "react";
import Word from './word'

import './words.scss'

interface MyState {
}
interface MyProps {
}


export default class Words extends React.Component<MyProps, MyState> {
  addWord(){
    console.log('add new word');
  }


  render() {
    return (
      <div className="wrapper cards-field">
        <h3>Category: <span>Action (set A)</span></h3>
        <Word />
        <div>
          <h2>Add new word</h2>
          <div>
            <img onClick={()=>{this.addWord()}} src='./img/add-category.svg' />
          </div>
        </div>
      </div>
    )
  }
}