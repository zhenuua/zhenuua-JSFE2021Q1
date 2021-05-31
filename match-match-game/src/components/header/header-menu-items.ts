import { HeaderMenuItem } from './header-menu-item';
import { BaseComponent } from '../base-components';
import './header.scss';

export class HeaderMenuItems extends BaseComponent {
  private readonly headerMenuItems: HeaderMenuItem[];

  constructor(changeCurrentView: (page: string) => void) {
    super('nav', ['header-nav']);

    const ul = new BaseComponent('ul', ['header-list', 'Roboto-12-15']);
    this.element.appendChild(ul.element);

    function menuHandler(page: string): () => void {
      return function () {
        changeCurrentView(page);

        // console.log('переход на другую страницу', page);
      };
    }

    this.headerMenuItems = [
      new HeaderMenuItem('./head-images/question.svg', 'About Game', ['active-botton-menu'], menuHandler('About')),
      new HeaderMenuItem('./head-images/star.svg', 'Best Score', [], menuHandler('Score')),
      new HeaderMenuItem('./head-images/gear.svg', 'Game Settings', [], menuHandler('Settings')),
    ];
    for (const value of this.headerMenuItems) {
      ul.element.appendChild(value.element);
    }
  }
}
