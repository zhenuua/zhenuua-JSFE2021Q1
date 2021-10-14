import React from "react";
import { Views } from '../../assets/constants';
import { RouteComponentProps } from 'react-router-dom';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";

import Words from './words/words';
import Categories from './card-category/categories'

interface MyState {
}

interface MyProps {

  //history: RouteComponentProps["history"],

 // history : History,
  changeCategory: (page: string) => void,
}
// const ChildComponent : React.SFC<ChildComponentProps> = ({ history }) => (
//   ..
// );

export default class HeaderAdmin extends React.Component<MyProps, MyState> {

  exitAdmin() {
    console.log('exitAdmin');
    this.props.changeCategory(Views.MAIN)
  }
  goCategories() {
    console.log('goCategories');
  }
  goWords() {
    console.log('goWords');
  }


  render() {
    return (
      <section className='header-admin'>

        {/* <Switch>
          <Route history={history} path='/home' component={Views.MAIN} />
          <Route history={history} path='/appointments' component={Appointments} />
          <Redirect from='/' to='/home' />
        </Switch> */}


        <div className='wrapper header-admin__control'>
          <div className='routing_btn'>
            <button className='btn-admin active' onClick={() => { this.goCategories() }}>Categories</button>
            <button className='btn-admin' onClick={() => { this.goWords() }}>Words</button>
          </div>

          <button className='btn-admin' onClick={() => { this.exitAdmin() }}>Log out</button>
        </div>

      </section>
    )
  }

}