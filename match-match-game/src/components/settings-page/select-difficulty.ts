import { BaseComponent } from '../base-components';
import { Option } from './option';

import './settings-page.scss';

export class SelectDifficulty extends BaseComponent {
  private readonly options: Option[];

  constructor() {
    super('select', ['select-type', 'Roboto-14-21']);

    this.options = [
      new Option('4x3'),
      new Option('4x4'),
      new Option('4x5'),
    ];
    for (const value of this.options) {
      this.element.appendChild(value.element);
    }
  }
}
