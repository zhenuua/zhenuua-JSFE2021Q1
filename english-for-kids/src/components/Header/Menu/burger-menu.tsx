import React from "react";
import MenuItems from './menu-itams'

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
  changeBurger(){ //e: any
    this.props.clickHandler()

    // let burgerMenu = document.querySelector('.menu')
    // if (e.target !== burgerMenu) {
    //   this.props.clickHandler()
    // }
   // if (event.target !== )
   // let classNameBurger = this.state.classNameBurger

    // if (this.state.isShow){
    //       this.setState({styleBurger: 'burger-open'})
    //     } else {
    //       this.setState({styleBurger: 'burger'})
    //     }

    //{this.state.classNameBurger}
  }

  render(){
    return (
      // onClick={()=>this.openCloseMenu()}
      <div className='burger' onClick={()=>this.changeBurger()}>  
        <span className={`burger__line ${this.props.isShow ? 'burger__line__active' : ''}`}  />
        {/* <MenuItems isShow={this.state.isShow} /> */}
      </div>
    )
  }
}