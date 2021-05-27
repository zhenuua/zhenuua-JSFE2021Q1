import { HeaderMenuItem } from './header-menu-item';
import { BaseComponent } from '../base-components';
import './header.scss';

export class HeaderMenuItems extends BaseComponent {
  private readonly headerMenuItems: HeaderMenuItem[];

  constructor(changeCurrentView: (page: string) => void) {
    super('nav', ['header-nav']);

    const ul = new BaseComponent('ul', ['header-list', 'Roboto-12-15']);
    this.element.appendChild(ul.element);

    function fff(page: string): () => void {
      return function () {
        changeCurrentView(page);
        console.log('переход на другую страницу', page);
      };
    }

    this.headerMenuItems = [
      new HeaderMenuItem('../head-images/question.svg', 'About Game', ['active-botton-menu'], fff('Game')),
      new HeaderMenuItem('../head-images/star.svg', 'Best Score', [], fff('Best score')),
      new HeaderMenuItem('../head-images/gear.svg', 'Game Settings', [], fff('Settings')),
    ];
    for (const value of this.headerMenuItems) {
      ul.element.appendChild(value.element);
    }
  }
}
