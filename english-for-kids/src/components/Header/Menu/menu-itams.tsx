import React from "react";
import { cardCategories } from "../../../assets/cards";

import './menu.scss';

interface MyProps {
  isShow: boolean,
  changeCategory: (page: string) => void
}

interface MyState {
  activePage: string
}

export default class MenuItems extends React.Component<MyProps, MyState> {

  render() {
    let menuItems = [...cardCategories, { nameCategory: 'Stats', image: 'img/stats.jpg' },];
    menuItems = [{ nameCategory: 'MainPage', image: 'img/home.jpg' }, ...menuItems];
//console.log(menuItems[0].nameCategory);

    return (
      <ul className={`menu ${this.props.isShow ? 'menu__translate' : ''}`}>
        {menuItems
          .map((item) =>
            <li key={item.nameCategory} className='menu__link' onClick={() =>
              this.props.changeCategory(item.nameCategory)
             
              
            }>
              <img className='menu__icon' src={item.image} />
              {item.nameCategory}
            </li>)}
      </ul>
    )
  }
}