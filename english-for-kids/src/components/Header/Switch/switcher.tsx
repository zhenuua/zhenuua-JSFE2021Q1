import React from "react";

import './switcher.scss';

interface MyProps {
}
interface MyState {
  play: boolean
}

export default class Switcher extends React.Component<MyProps, MyState> {

  render(){
    
    return (
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round train" data-on="Train" data-off="Play"><p className='gameMode'></p></span>
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