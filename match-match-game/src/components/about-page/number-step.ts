import { BaseComponent } from '../base-components';

export class NumberStep extends BaseComponent {
  constructor(numberStep: string) {
    super('p', ['step-number']);
    this.element.innerHTML = numberStep;
  }
}
