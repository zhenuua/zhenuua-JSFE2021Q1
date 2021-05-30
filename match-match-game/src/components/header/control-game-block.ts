import { BaseComponent } from '../base-components';
import { LogoProfile } from './logo-profile';
import { Button } from '../button/button';

import './header.scss';

export class ControlGame extends BaseComponent {
  private readonly logoPofile: LogoProfile;

  private readonly button: Button;

  constructor() {
    super('div', ['header-stop-game', 'Roboto-500-14']);

    this.button = new Button('Start Game', ['botton-game']);
    this.element.appendChild(this.button.element);

    this.logoPofile = new LogoProfile();
    this.element.appendChild(this.logoPofile.element);
  }
}
