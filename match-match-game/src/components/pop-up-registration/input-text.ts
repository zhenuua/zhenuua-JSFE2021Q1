import { BaseComponent } from '../base-components';

export class InputText extends BaseComponent {
  constructor(placeHolder: string) {
    super('input', ['input-field', 'Roboto-16-24']);
    this.element.setAttribute('type', 'text');
    this.element.setAttribute('placeHolder', placeHolder);
  }
}
