import React from "react";
import MenuItems from './menu-itams'

import './menu.scss';

interface MyProps {
  clickHandler: () => void
}
interface MyState {
  isShow: boolean,
  classNameBurger: 'burger'
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
  changeBurger(){
    this.props.clickHandler()
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
        <span className="burger__line" />
        {/* <MenuItems isShow={this.state.isShow} /> */}
      </div>
      
    )
  }
}