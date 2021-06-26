import { BaseComponent } from '../base-components';

export class InputId extends BaseComponent {
  constructor() {
    super('input', ['input-id']);
    this.element.setAttribute('type', 'hidden');
    this.element.setAttribute('id', 'input-id');
  }
}
