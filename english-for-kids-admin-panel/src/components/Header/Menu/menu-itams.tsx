import React from "react";
import { cardCategories } from "../../../assets/cards";
import { Views, linkIcon } from '../../../assets/constants';

import './menu.scss';

interface MyProps {
  isShow: boolean,
  changeCategory: (page: string) => void
}

interface MyState {
  activePage: string
}

export default class MenuItems extends React.Component<MyProps, MyState> {

  state = { activePage: Views.MAIN }
  toggleClass(nameCategory: string) {
    this.props.changeCategory(nameCategory);
    this.setState({ activePage: nameCategory });
  };

  render() {
    let menuItems = [{ nameCategory: Views.MAIN, image: linkIcon.HOME },
    ...cardCategories, { nameCategory: Views.STATS, image: linkIcon.STATS }];

    return (
      <ul className={`menu ${this.props.isShow ? 'menu__translate' : ''}`}>
        {menuItems
          .map((item) =>
            <li key={item.nameCategory}
              className={`menu__link ${item.nameCategory === this.state.activePage ? 'active' : ''}`}
              onClick=
              {() =>
                this.toggleClass(item.nameCategory)
              }>
              <img className='menu__icon' src={item.image} />
              {item.nameCategory}
            </li>)}
      </ul>
    )
  }
}