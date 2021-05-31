import './cards-field.scss';
import { BaseComponent } from '../base-components';
import { Card } from '../card/card';

export const SHOW_TIME = 5;

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('div', ['cards-field']);
  }

  openCards() : void {
    this.cards.forEach((card) => {
      card.flipToFront();
    });
  }

  clear() : void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]) : void {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, SHOW_TIME * 1000);
  }
}
