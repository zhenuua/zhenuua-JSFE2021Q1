import React from "react";
import BurgerMenu from "./Menu/burger-menu";
import Switcher from "./Switch/switcher";
import MenuItems from "./Menu/menu-itams";

import './header.scss';

interface MyProps {
  changeCategory: (page: string)=>void,
  changeGameModeApp: (gameMode: string)=>void,
  gameModeName: string
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
    this.props.changeCategory(page);
    this.openCloseMenu();
  }

  render(){
    return (
      <section className='header-field'>
        <div>
          <BurgerMenu clickHandler={()=>this.openCloseMenu()} isShow={this.state.isShow} />
          <MenuItems isShow={this.state.isShow}
            changeCategory={(page:string)=>{this.menuItemsHandler(page)}}
          />
        </div>
        <h1>English for kids</h1>
        <Switcher changeGameModeApp={(gameMode:string)=>{
          this.props.changeGameModeApp(gameMode);}} gameModeName={this.props.gameModeName}
        />
      </section>
    )
  }
}