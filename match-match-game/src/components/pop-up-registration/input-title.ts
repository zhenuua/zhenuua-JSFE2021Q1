import { BaseComponent } from '../base-components';

export class InputTitle extends BaseComponent {
  constructor(inputTitleText: string) {
    super('p', ['popup-name-block', 'Roboto-12-16']);
    this.element.innerHTML = inputTitleText;
  }
}