import { BaseComponent } from '../base-components';

import './hr.scss';

export class HrElement extends BaseComponent {
  constructor(styleHr: string[] = []) {
    super('hr', ['hr-default'].concat(styleHr));
  }
}
