import { BaseComponent } from '../base-components';
import { Player } from './player';

export class Players extends BaseComponent {
  private players: Player[];

  constructor() {
    super('div', ['all-players-score']);

    this.players = [];
    //   new Player(
    //     {
    //       name: 'Nicci Troiani',
    //       email: 'nicci@gmail.com',
    //       score: 45,
    //     },

    //   ),
    //   new Player(
    //     {
    //       name: 'George Fields',
    //       email: 'jack@gmail.com',
    //       score: 225,
    //     },
    //   ),
    //   new Player(
    //     {
    //       name: 'Jones Dermot',
    //       email: 'dermot@gamil.com',
    //       score: 100,
    //     },
    //   ),
    // ];

    const oldScores = window.localStorage.getItem('scores');

    if (oldScores) {
      const oldScoresArray = JSON.parse(oldScores);

      const playerData = oldScoresArray.sort((a: Player, b: Player) => (a.score < b.score ? 1 : -1)).slice(0, 10);

      const result = playerData.map((item:{ name: string, email: string, score: number }) => new Player({
        name: item.name, email: item.email, score: +item.score,
      }));

      for (const value of result) {
        this.element.appendChild(value.element);
      }
    }
  }
}
