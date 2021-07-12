import React from "react";

import './menu.scss';

interface MyProps {
  isShow: boolean,
  clickHandler: () => void
}
interface MyState {

}

export default class BurgerMenu extends React.Component<MyProps, MyState> {

  render(){
    return (
      <div className='burger' onClick={()=>this.props.clickHandler()}>  
        <span className={`burger__line ${this.props.isShow ? 'burger__line__active' : ''}`} />
      </div>
    )
  }
}