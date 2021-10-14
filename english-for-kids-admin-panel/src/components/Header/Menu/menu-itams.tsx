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
  password: string,
  login: string,
}

export default class MenuItems extends React.Component<MyProps, MyState> {

  state = {
    activePage: Views.MAIN,
    isShowPopup: false,
    password: '',
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

  loginInput(value: string) {
    this.setState({
      login: value
    });
  }

  passwordInput(value: string){
    this.setState({
      password: value
    });
  }

  validate() {
    if (this.state.login === 'admin' && this.state.password === 'admin') {
    this.openClosePopup();
    this.props.changeCategory('Admin');
    }
  }
  
  cancel() {
    this.openClosePopup();
    this.setState({
      login: '',
      password: ''
    })
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
                  onChange={(e: React.FormEvent<HTMLInputElement>) => this.loginInput(e.currentTarget.value)}
                />

                <p className="popup-name-block">password </p>
                <input required className="popup-login-input" type="password" placeholder="password"
                  value={this.state.password}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => this.passwordInput(e.currentTarget.value)}
                />
                
                <p className="popup-name-block invalid-password">Invalid password </p>
              </div>
              <div className='popup-control'>
                <button className='btn btn__control__cancel' onClick={() => this.cancel()}>Cancel</button>
                <button className='btn btn__control__login' onClick={() => this.validate()}>Login</button>
              </div>
            </div>
          </div>


        </div>
      </ul>
    )
  }
}