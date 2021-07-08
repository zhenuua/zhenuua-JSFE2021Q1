import React from "react";

import './switcher.scss';

interface MyProps {
}
interface MyState {
  playMode: string
}

export default class Switcher extends React.Component<MyProps, MyState> {

  state = { playMode: 'train' }

  changeGameMode() {
    //console.log(this.state);
    // if (this.state){
    //   this.setState({ playMode: 'train' })
    // } else {
    //   this.setState({ playMode: 'play' })
    // }
    // console.log(this.state);
   // this.setState({ playMode: true })
  }

  render(){

    let gameMode = 'train'
    if (this.state){
      gameMode = 'train'
    } else {
      gameMode = 'play'
    }


    return (
      <label className="switch">
        <input type="checkbox" onChange={()=>this.changeGameMode()} />
        <span className="slider round train" data-on="Train" data-off="Play"><p className='game-mode'>{gameMode}</p></span>
        {/* <span className="slider round play display-none">Play</span> */}
      </label>
      /* <div className="switch">
        <label  className="checkbox-label">
        <input type="checkbox" className="checkbox" id="switch__input"/>
          <span className="train">Train</span>
          <span className="play display-none">Play</span>
          <span className="switch-bg"></span>
        </label>
      </div> */
    )
  }
}
 /* for="switch__input"  */