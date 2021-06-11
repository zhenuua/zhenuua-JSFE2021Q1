import { BaseComponent } from '../base-components';
import { PopUpField } from './pop-up-field';
import { Title } from '../title/title';
import { scoreGame } from '../score/score';

import './pop-up.scss';

export class PopUpContent extends BaseComponent {
  private readonly title: Title;

  private readonly popUpField: PopUpField;

  constructor() {
    super('div', ['popup-content']);

    this.title = new Title(`Congratulations, you won! You can add your score: ${scoreGame.score}`, ['popup-title']);
    this.element.appendChild(this.title.element);

    this.popUpField = new PopUpField();
    this.element.appendChild(this.popUpField.element);
  }

  refreshScore() : void {
    this.title.element.innerHTML = `Congratulations, you won! You can add your score: ${scoreGame.score}`;
  }
}
