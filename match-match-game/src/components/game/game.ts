import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-components';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { Timer } from '../timer/timer';
import { ButtonsNames, Time } from '../../shared/constants';

export class Game extends BaseComponent {
  private cards?: Card[];

  private timerId?: number;

  private readonly timer: Timer;

  private readonly cardsField: CardsField;

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super('section', ['background-play-zone']);

    this.timer = new Timer();

    this.element.appendChild(this.timer.element);
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
  }

  stopGame() : void {
    window.clearInterval(this.timerId);
    this.timer.stopTimer();
    this.cardsField.openCards();
    const mainButton = document.querySelector('.button-game');

    if (mainButton) {
      mainButton.textContent = ButtonsNames.startGame;
    }
  }

  newGame(images: string[]) : void {
    this.timerId = window.setTimeout(() => this.timer.startTimer(), Time.SHOW_TIME);
    this.cardsField.clear();
    this.cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    this.cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.cardsField.addCards(this.cards);
  }

  checkGameOver() : void {
    const allCardIsFlipped = this.cards?.every((card) => card.isFlipped === false);
    if (allCardIsFlipped) {
      this.stopGame();
    }
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;

    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      await delay(Time.FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    } else {
      this.checkGameOver();
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
