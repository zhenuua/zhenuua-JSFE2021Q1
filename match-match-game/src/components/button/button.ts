import { BaseComponent } from '../base-components';

import '../header/header.scss';

export class Button extends BaseComponent {
  constructor(text: string, styleBotton: string[] = []) {
    super('button', ['Roboto-500-14'].concat(styleBotton));
    this.element.innerHTML = text;
  }
}
