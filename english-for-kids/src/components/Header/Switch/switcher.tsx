import React from "react";

import './switcher.scss';

export default class Switcher extends React.Component {

  render(){
    
    return (
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round train" data-on="Train" data-off="Play">Train</span>
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