import React from "react";
import { cardCategories } from "../../../assets/cards";
import { Views, linkIcon } from '../../../assets/constants';

import './menu.scss';

interface MyProps {
  isShow: boolean,
  changeCategory: (page: string) => void
}

interface MyState {
  activePage: string,
  isShowPopup: boolean,
  isCorrectPassword: boolean,
  login: string
}

export default class MenuItems extends React.Component<MyProps, MyState> {

  state = {
    activePage: Views.MAIN,
    isShowPopup: false,
    isCorrectPassword: false,
    login: ''
  }

  toggleClass(nameCategory: string) {
    this.props.changeCategory(nameCategory);
    this.setState({ activePage: nameCategory });
  };

  openClosePopup() {
    if (this.state.isShowPopup === true) {
      this.setState({ isShowPopup: false })
    } else {
      this.setState({ isShowPopup: true })
    }
  }
  loginInput(event: InputEvent) {
    //if (this.state.login)
    console.log(this.state.login);

    const target = event.target;
    console.log(target);

    // const value = target.value;
    // // const name = target.name;

    // this.setState({
    //   login: value
    // });
    // this.setState({login: })
  }


  //validate(event) {}

  login() {
    //if (this.state.isCorrectPassword === true) {
    this.openClosePopup();
    this.props.changeCategory('Admin');
    console.log('login');
    // }
  }
  cancel() {
    this.openClosePopup();
    console.log('cancel');
  }


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
        <button className='btn btn__login' onClick={() => this.openClosePopup()} >Login</button>
        <div className={`${this.state.isShowPopup === true ? 'popup-main' : 'display-none'}`}>
          <div className='popup-body'>
            <div className='popup-content'>
              <div className='popup-title'>Login</div>
              <div className='popup-inputs'>
                <p className="popup-name-block">login</p>
                <input required className="popup-login-input" type="text" placeholder="login"
                  value={this.state.login}
                  onChange={() => this.loginInput}
                />

                <p className="popup-name-block">password </p>
                <input required className="popup-login-input" type="password" placeholder="password"

                />
                <p className="popup-name-block invalid-password">Invalid password </p>
              </div>
              <div className='popup-control'>
                <button className='btn btn__control__cancel' onClick={() => this.cancel()}>Cancel</button>
                <button className='btn btn__control__login' onClick={() => this.login()}>Login</button>
              </div>
            </div>
          </div>


        </div>
      </ul>
    )
  }
}