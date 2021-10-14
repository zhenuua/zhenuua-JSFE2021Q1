import React from 'react';
import AdminHeader from './header-admin';
import Categories from './card-category/categories'
//import CardGrid from './components/MainPage/CardGrid';

import { Views } from '../../assets/constants';

import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';


import './admin.scss';


interface MyProps {
  changeCategory: (page: string) => void,
}
interface MyState {
  // activePage: string,
  // activeGameMode: string,
  // mistakes: number
}

export default class AdminMain extends React.Component<MyProps, MyState> {

  // state = {
  //   activePage: Views.MAIN,
  //   activeGameMode: Views.TRAIN_MODE,
  //   mistakes: 0
  // }


  render() {
    //const history = createBrowserHistory()
    return (
      <section>
        <AdminHeader
          changeCategory={(category: string) => { this.props.changeCategory(category) }}
        />
        <Categories />
      </section>
      //<Router history={history}>

      //</Router>




    )
  }
}