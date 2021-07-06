import React from "react";
import {cardCategories} from "../../../assets/cards";

import './menu.scss';

interface MyProps {
  isShow: boolean,
  functionFromPerent: (page: string)=>void
}

interface MyState {
  activePage: string
}

export default class MenuItems extends React.Component<MyProps, MyState> {

  changeActivePage(category: string){
    console.log('change page', category);
    // let activePage = this.state.activePage;
    // activePage = activePage + ' ' + 'active'
    // this.setState({activePage})
  }
  render(){
    let menuItems = [...cardCategories, {nameCategory: 'Stats', image: 'img/stats.jpg'},]
    menuItems = [{nameCategory: 'MainPage', image: 'img/home.jpg'}, ...menuItems]

    if (this.props.isShow){
      return (
        <ul className='menu'>
          {menuItems
            .map((item)=>
            <li key={item.nameCategory} className='menu__link' onClick={()=>this.props.functionFromPerent(item.nameCategory)}>
              <img className='menu__icon' src={item.image} />
                {item.nameCategory}
            </li>)}
        </ul>
      )
    }
    return (<div></div>)
  }
}