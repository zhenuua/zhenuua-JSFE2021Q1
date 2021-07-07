import { BaseComponent } from '../base-components';
import { Option } from './option';

import './settings-page.scss';

export const typeCards = {
  cardsCount: 0,
};

export class SelectCards extends BaseComponent {
  private readonly options: Option[];

  constructor() {
    super('select', ['select-type', 'Roboto-14-21']);

    const el = this.element as HTMLInputElement;

    this.options = [
      new Option('animals', '0'),
      new Option('flags', '1'),
      new Option('nature', '2'),
    ];
    for (const value of this.options) {
      this.element.appendChild(value.element);
    }

    el.value = typeCards.cardsCount.toString();

    this.element.addEventListener('input', () => {
      if (el.value === '0') {
        typeCards.cardsCount = 0;
      } else if (el.value === '1') {
        typeCards.cardsCount = 1;
      } else if (el.value === '2') {
        typeCards.cardsCount = 2;
      }
    });
  }
}
