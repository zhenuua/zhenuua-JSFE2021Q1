import React from "react";

import './switcher.scss';

interface MyProps {
  changeGameModeApp: (gameMode: string)=>void
}
interface MyState {
  gameModeCheckBox: string  //delete
}

export default class Switcher extends React.Component<MyProps, MyState> {

  state = { gameModeCheckBox: 'train' }

  changeGameMode() {
    if (this.state.gameModeCheckBox === 'train' ){
      this.setState({ gameModeCheckBox: 'play' });
      this.props.changeGameModeApp('play');    //???????????????????
    } else {
      this.setState({ gameModeCheckBox: 'train' });
      this.props.changeGameModeApp('train');   //???????????????????
    }
  }

  render() {
    let gameModeName = 'train'
    if (this.state.gameModeCheckBox === 'train') {
      gameModeName = 'train'
    } else {
      gameModeName = 'play'
    }

    return (
      <label className="switch">
        <input type="checkbox" onChange={() => this.changeGameMode()} />
        <span className="slider round train">
          <p className='game-mode'>{gameModeName}</p>
        </span>
      </label>
    )
  }
}