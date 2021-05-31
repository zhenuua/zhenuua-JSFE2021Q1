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
      new Option('animals', 'animals'),
      new Option('flags', 'flags'),
      new Option('nature', 'nature'),
    ];
    for (const value of this.options) {
      this.element.appendChild(value.element);
    }
    el.value = 'animals';

    this.element.addEventListener('input', () => {
      if (el.value === 'animals') {
        typeCards.cardsCount = 0;
      } else if (el.value === 'flags') {
        typeCards.cardsCount = 1;
      } else if (el.value === 'nature') {
        typeCards.cardsCount = 2;
      }
    });
  }
}
