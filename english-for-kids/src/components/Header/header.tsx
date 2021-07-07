import React from "react";
import BurgerMenu from "./Menu/burger-menu";
import Switcher from "./Switch/switcher";
import MenuItems from "./Menu/menu-itams";

import './header.scss';

interface MyProps {
  functionFromPerent: (page: string)=>void
}
interface MyState {
  isShow: boolean
}

export default class Header extends React.Component<MyProps, MyState> {
  constructor(props: MyProps){
    super(props);
    this.state = {
      isShow: false
    }
  }
  openCloseMenu() {
    if (this.state.isShow){
      this.setState({isShow: false})
    } else {
      this.setState({isShow: true})
    }
  }
  menuItemsHandler(page: string){
    this.props.functionFromPerent(page);
    this.openCloseMenu();
  }

  render(){
    return (
      <section className='header-field'>
        <div>
          <BurgerMenu clickHandler={()=>this.openCloseMenu()} isShow={this.state.isShow} />
          <MenuItems isShow={this.state.isShow}
            functionFromPerent={(page:string)=>{this.menuItemsHandler(page)}}
          // functionFromPerent={(page:string)=>{
          //   this.props.functionFromPerent(page);
          //   this.openCloseMenu();
          //   }} 
            />
        </div>
        <h1>English for kids</h1>
        <Switcher />
      </section>
    )
  }
}