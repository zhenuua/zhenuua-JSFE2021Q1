import { BaseComponent } from '../base-components';
import { Option } from './option';

import './settings-page.scss';

export const difficulty = {
  cardsCount: 4,
};

export class SelectDifficulty extends BaseComponent {
  private readonly options: Option[];

  constructor() {
    super('select', ['select-type', 'Roboto-14-21']);

    const el = this.element as HTMLInputElement;

    this.options = [
      new Option('4x3', '4'),
      new Option('4x4', '6'),
      new Option('4x5', '8'),
    ];
    for (const value of this.options) {
      this.element.appendChild(value.element);
    }
    el.value = difficulty.cardsCount.toString();

    this.element.addEventListener('input', () => {
      if (el.value === '4') {
        difficulty.cardsCount = 4;
      } else if (el.value === '6') {
        difficulty.cardsCount = 6;
      } else if (el.value === '8') {
        difficulty.cardsCount = 8;
      }

      // console.log(this.element.getAttribute('value')); // null
      // console.log(this.element.dataset.value);// undefind
    });
  }
}
