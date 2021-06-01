import { HeaderMenuItem } from './header-menu-item';
import { BaseComponent } from '../base-components';
import { Views } from '../../shared/constants';

import './header.scss';

export class HeaderMenuItems extends BaseComponent {
  private readonly headerMenuItems: HeaderMenuItem[];

  constructor(changeCurrentView: (page: string) => void) {
    super('nav', ['header-nav']);

    const ul = new BaseComponent('ul', ['header-list', 'Roboto-12-15']);
    this.element.appendChild(ul.element);

    function menuHandler(page: string) :() => void {
      return () => {
        changeCurrentView(page);
      };
    }

    this.headerMenuItems = [
      new HeaderMenuItem('./head-images/question.svg', 'About Game', ['active-botton-menu'], menuHandler(Views.About)),
      new HeaderMenuItem('./head-images/star.svg', 'Best Score', [], menuHandler(Views.Score)),
      new HeaderMenuItem('./head-images/gear.svg', 'Game Settings', [], menuHandler(Views.Settings)),
    ];
    for (const value of this.headerMenuItems) {
      ul.element.appendChild(value.element);
    }
  }
}
