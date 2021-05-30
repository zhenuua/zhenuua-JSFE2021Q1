import { BaseComponent } from '../base-components';

export class Score extends BaseComponent {
  constructor(scoreNumber: number) {
    super('p', ['score-points', 'Roboto-500-14']);

    this.element.innerHTML = scoreNumber.toString();
  }
}
