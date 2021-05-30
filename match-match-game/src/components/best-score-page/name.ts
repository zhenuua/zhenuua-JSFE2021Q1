import { BaseComponent } from '../base-components';

export class NamePlayer extends BaseComponent {
  constructor(textName: string) {
    super('p', ['name-of-player', 'Roboto-500-14']);

    this.element.innerHTML = textName;
  }
}
