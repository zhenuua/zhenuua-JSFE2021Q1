import React from 'react';
import { cardCategories , cards } from '../../assets/cards'

import './stats.scss';

interface MyState {
}
interface MyProps {
}
//TODO
export default class Stats extends React.Component<MyProps, MyState> {
  render (){
    return (
      <section className='stats'>
        <div className='stats__control'>
          <button className='stats__control__button'>Repeat difficult words</button>
          <button className='stats__control__button'>Reset</button>
        </div>
        <table className='table__stats'>
          <tr className='table__title'>
            <th>Category</th>
            <th>Word</th>
            <th>Translation</th>
            <th>Trained</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
          </tr>

          <tr className='table__string'>
            <th>{cardCategories[0].nameCategory}</th>
            <th>{cards[0][0].word}</th>
            <th>{cards[0][0].translation}</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
            <th>0</th>
          </tr>

        </table>
      </section>
    )
  }

}

