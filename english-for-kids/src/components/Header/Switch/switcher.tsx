import React from "react";

import './switcher.scss';

interface MyProps {
}
interface MyState {
  gameMode: string
}

export default class Switcher extends React.Component<MyProps, MyState> {

  state = { gameMode: 'train' }

  changeGameMode() {
    if (this.state.gameMode === 'train' ){
      this.setState({ gameMode: 'play' })
    } else {
      this.setState({ gameMode: 'train' })
    }
  }

  render() {
    let gameModeName = 'train'
    if (this.state.gameMode === 'train') {
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