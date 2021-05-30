import { BaseComponent } from '../base-components';
import { Option } from './option';

import './settings-page.scss';

export class SelectCards extends BaseComponent {
  private readonly options: Option[];

  constructor() {
    super('select', ['select-type', 'Roboto-14-21']);

    this.options = [
      new Option('animals'),
      new Option('vehicles'),
    ];
    for (const value of this.options) {
      this.element.appendChild(value.element);
    }
  }
}
