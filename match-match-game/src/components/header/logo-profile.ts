import { BaseComponent } from '../base-components';

import './header.scss';

export class LogoProfile extends BaseComponent {
  constructor() {
    super('img', ['image-profile']);
    this.element.setAttribute('src', './head-images/logo-profile-without-photo.svg');
  }
}
