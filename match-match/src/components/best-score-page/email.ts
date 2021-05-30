import { BaseComponent } from '../base-components';

export class EmailPlayer extends BaseComponent {
  constructor(textEmail: string) {
    super('p', ['mail-of-player', 'Roboto-12-15']);

    this.element.innerHTML = textEmail;
  }
}
