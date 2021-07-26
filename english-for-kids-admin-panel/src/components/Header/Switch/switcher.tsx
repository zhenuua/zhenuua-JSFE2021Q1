import React from "react";
import { Views } from '../../../assets/constants';

import './switcher.scss';

interface MyProps {
  changeGameModeApp: (gameMode: string) => void,
  gameModeName: string
}
interface MyState {
}

export default class Switcher extends React.Component<MyProps, MyState> {

  changeGameMode() {
    if (this.props.gameModeName === Views.TRAIN_MODE) {
      this.props.changeGameModeApp(Views.PLAY_MODE);
    } else {
      this.props.changeGameModeApp(Views.TRAIN_MODE);
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