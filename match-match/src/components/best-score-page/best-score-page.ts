import { BaseComponent } from '../base-components';
import { Title } from '../title/title';

import './best-score-page.scss';
import { Players } from './players';

export class BestScore extends BaseComponent {
  private readonly title: Title;

  private readonly players: Players;

  constructor() {
    super('section', ['best-score']);

    this.title = new Title('Best players', ['title-score']);
    this.element.appendChild(this.title.element);

    this.players = new Players();
    this.element.appendChild(this.players.element);
  }
}
