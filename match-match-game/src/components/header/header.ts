import { Logo } from './logo';
// import {LogoProfile} from './logo-profile';
import { ControlGame } from './control-game-block';
import { BaseComponent } from '../base-components';
import { HeaderMenu } from './header-menu';
import './header.scss';

export class Header extends BaseComponent {
  private readonly headerMenu: HeaderMenu;

  private readonly logo: Logo;

  private readonly controlGame: ControlGame;

  constructor(changeCurrentView: (page: string) => void) {
    super('header', ['background-header']);
    const wrapper = new BaseComponent('div', ['header-article']);
    this.element.appendChild(wrapper.element);

    this.logo = new Logo();
    wrapper.element.appendChild(this.logo.element);

    this.headerMenu = new HeaderMenu(changeCurrentView);
    wrapper.element.appendChild(this.headerMenu.element);

    this.controlGame = new ControlGame();
    wrapper.element.appendChild(this.controlGame.element);
  }
}
