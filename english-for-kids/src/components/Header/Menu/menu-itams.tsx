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

  // constructor(props: any) {
  //   super(props);

  //   this.wrapperRef = React.createRef();
  //   this.setWrapperRef = this.setWrapperRef.bind(this);
  //   this.handleClickOutside = this.handleClickOutside.bind(this);
  // }

  state = { activePage: 'MainPage' }
  toggleClass(nameCategory: string) {
    this.props.changeCategory(nameCategory);
    this.setState({ activePage: nameCategory });
  };

  // handleClickOutside(event) {
  //   if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
  //     alert('You clicked outside of me!');
  //   }
  // }
  // componentDidMount() {
  //   document.addEventListener('mousedown', this.handleClickOutside);
  // }
  // componentWillUnmount() {
  //   document.removeEventListener('mousedown', this.handleClickOutside);
  // }

  render() {
    let menuItems = [{ nameCategory: 'MainPage', image: 'img/home.jpg' },
    ...cardCategories, { nameCategory: 'Stats', image: 'img/stats.jpg' }];

    return (
      <ul className={`menu ${this.props.isShow ? 'menu__translate' : ''}`}
        //ref={this.wrapperRef}
      >
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