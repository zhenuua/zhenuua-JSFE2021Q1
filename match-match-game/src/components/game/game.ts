import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-components';
import { Card } from '../card/card';
import { CardsField, SHOW_TIME } from '../cards-field/cards-field';
import { Timer } from '../timer/timer';

const FLIP_DELAY = 1000;

export class Game extends BaseComponent {
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

  stopGame() {
    window.clearInterval(this.timerId);
    console.log('stop game');
    this.timer.stopTimer();
    this.cardsField.openCards();
    const mainButton = document.querySelector('.button-game');
    if (mainButton) {
      console.log('fff');

      mainButton.textContent = 'Start Game';
    }

    // alert('Game over, start new game!');
  }

  newGame(images: string[]) {
    this.timerId = window.setTimeout(() => this.timer.startTimer(), SHOW_TIME * 1000);
    // сюда добавить таймер при старте новой игры, метод финиш подсчет очков

    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    // сделать лучше рандом

    // function shuffle(images: string[]) {
    //   for (let i = images.length - 1; i > 0; i--) {
    //     let j = Math.floor(Math.random() * (i + 1));
    //     [images[i], images[j]] = [images[j], images[i]];
    //   }
    // }
    // shuffle(images);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.cardsField.addCards(cards);
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
      // если не совпали карточки
      // this.activeCard.showError() - добавить метод showError() -
      // становится красной и на карту переданную в hendler тоже саамое передаем
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    } // при совпаданеии: else{делаем зелеными}

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
