import React from "react";

import './menu.scss';

interface MyProps {
  isShow: boolean,
  clickHandler: () => void
}
interface MyState {

}

export default class BurgerMenu extends React.Component<MyProps, MyState> {

  // constructor(props: any){
  //   super(props);
  //   this.state = {
  //     isShow: false
  //   }
  // }
  // openCloseMenu() {
  //   console.log('menu open');
  //   if (this.state.isShow){
  //     this.setState({isShow: false})
  //   } else {
  //     this.setState({isShow: true})
  //   }
  // }

  render(){
    return (
      <div className='burger' onClick={()=>this.props.clickHandler()}>  
        <span className={`burger__line ${this.props.isShow ? 'burger__line__active' : ''}`} />
      </div>
    )
  }
}