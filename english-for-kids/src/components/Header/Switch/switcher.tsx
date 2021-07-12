import React from "react";

import './switcher.scss';

interface MyProps {
  changeGameModeApp: (gameMode: string)=>void,
  gameModeName: string
}
interface MyState {
}

export default class Switcher extends React.Component<MyProps, MyState> {

  changeGameMode() {
    if (this.props.gameModeName === 'train' ){
      this.props.changeGameModeApp('play');
    } else {
      this.props.changeGameModeApp('train');
    }
  }

  render() {
    
    return (
      <label className="switch">
        <input type="checkbox" onChange={() => this.changeGameMode()} />
        <span className="slider round train">
          <p className='game-mode'>{this.props.gameModeName}</p>
        </span>
      </label>
    )
  }
}