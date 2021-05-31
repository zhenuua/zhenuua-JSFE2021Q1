import { BaseComponent } from '../base-components';

export class Option extends BaseComponent {
  constructor(text: string, value: string) {
    super('option', ['option']);
    this.element.innerHTML = text;
    this.element.setAttribute('value', value);
  }
}
