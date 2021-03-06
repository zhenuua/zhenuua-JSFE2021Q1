import React from 'react';
import { cardCategories, cards } from '../../assets/cards'

import './stats.scss';

interface MyState {
}
interface MyProps {
}

export default class Stats extends React.Component<MyProps, MyState> {

  render() {
    let stringTable: {
      nameCat: string,
      word: string,
      translation: string,
      DEFAULT: number
    };

    let allStringTable = [];
    let DEFAULT_NUMBER_STATS = 0;
    let indexInCategory = 0;

    for (let findNameCategory of cardCategories) {
      indexInCategory = cardCategories
        .findIndex((element) => {
          if (findNameCategory.nameCategory === element.nameCategory) {
            return true
          }
        })
      const lendsCards = cards.length;
      for (let i = 0; i < lendsCards; i++) {
        stringTable = {
          nameCat: findNameCategory.nameCategory,
          word: cards[indexInCategory][i].word,
          translation: cards[indexInCategory][i].translation,
          DEFAULT: DEFAULT_NUMBER_STATS
        }
        allStringTable.push(stringTable);
      }
    }

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
            <th>Correct</th>
            <th>InCorrect</th>
            <th>%</th>
          </tr>

          {allStringTable.map((item) => {
            return (
              <tr className='table__string' key={item.nameCat}>
                <th>{item.nameCat}</th>
                <th>{item.word}</th>
                <th>{item.translation}</th>
                <th>{DEFAULT_NUMBER_STATS}</th>
                <th>{DEFAULT_NUMBER_STATS}</th>
                <th>{DEFAULT_NUMBER_STATS}</th>
                <th>{DEFAULT_NUMBER_STATS}</th>
              </tr>
            )

          })}
        </table>
      </section>
    )
  }

}

