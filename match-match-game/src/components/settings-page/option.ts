import { BaseComponent } from '../base-components';

export class Option extends BaseComponent {
  constructor(text: string) {
    super('option', ['option']);
    this.element.innerHTML = text;
  }
}
