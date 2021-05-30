import { BaseComponent } from '../base-components';

export class InputCheckBox extends BaseComponent {
  constructor() {
    super('input', ['checkbox-input', 'checkbox-name']);
    this.element.setAttribute('type', 'checkbox');
    this.element.setAttribute('autocomplete', 'off');
    this.element.setAttribute('checked', '');
  }
}