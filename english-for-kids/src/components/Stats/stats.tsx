import React from 'react';
import { cardCategories , cards } from '../../assets/cards'

import './stats.scss';

interface MyState {
  
}
interface MyProps {

}

export default class Stats extends React.Component<MyProps, MyState> {
  render (){
    return (
      <section className='stats'>
        <div className='stats__control'>
          <button className='stats__control__button'>Repeat difficult words</button>
          <button className='stats__control__button'>Reset</button>
        </div>
        <div className='stats__table'>
          {cards[0][0].word}
        </div>
      </section>
    )
  }

}

