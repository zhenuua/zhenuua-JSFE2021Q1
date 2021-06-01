import { BaseComponent } from '../base-components';
import { Player } from './player';

export class Players extends BaseComponent {
  private players: Player[];

  constructor() {
    super('div', ['all-players-score']);

    this.players = [
      new Player(
        {
          name: 'Nicci Troiani',
          email: 'nicci@gmail.com',
          score: 45,
        },

      ),
      new Player(
        {
          name: 'George Fields',
          email: 'jack@gmail.com',
          score: 225,
        },
      ),
      new Player(
        {
          name: 'Jones Dermot',
          email: 'dermot@gamil.com',
          score: 100,
        },
      ),
    ];

    for (const value of this.players) {
      this.element.appendChild(value.element);
    }
  }
}
