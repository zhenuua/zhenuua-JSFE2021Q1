import { BaseComponent } from '../base-components';

import './header.scss';

export class Logo extends BaseComponent {
  constructor() {
    super('img', ['logo-header']);
    this.element.setAttribute('src', './head-images/logo.svg');
  }
}
