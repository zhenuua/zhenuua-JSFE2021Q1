import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-components';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { Timer } from '../timer/timer';
import { ButtonsNames, Time } from '../../shared/constants';
import { PopUp } from '../pop-up-registration/pop-up';
import { difficulty } from '../settings-page/select-difficulty';
import { scoreGame } from '../score/score';

export class Game extends BaseComponent {
  private cards?: Card[];

  private timerId?: number;

  private readonly timer: Timer;

  private readonly cardsField: CardsField;

  private activeCard?: Card;

  private isAnimation = false;

  private popup: PopUp;

  public countOpenCards: number;

  constructor() {
    super('section', ['background-play-zone']);

    this.countOpenCards = 0;

    this.timer = new Timer();
    this.popup = new PopUp();
    this.element.appendChild(this.popup.element);

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
      this.countScore();
      this.popup.showPopUp();
    }
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;

    this.isAnimation = true;

    await card.flipToFront();

    this.countOpenCards++;

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

  countScore(): number {
    const secondsGame = Number(this.timer.getTime().substr(0, 0)) * 600
    + Number(this.timer.getTime().substr(1, 1)) * 60
    + Number(this.timer.getTime().substr(3));

    scoreGame.score = (((this.countOpenCards / 2) - ((this.countOpenCards / 2) - difficulty.cardsCount))
    * 100 - (secondsGame * 10)) * (difficulty.cardsCount / 2);
    if (scoreGame.score < 0) {
      scoreGame.score = 0;
    }
    return scoreGame.score;
  }
}
