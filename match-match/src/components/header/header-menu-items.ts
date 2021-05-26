import {HeaderMenuItem} from './header-menu-item';
import {BaseComponent} from '../base-components';
import './header.scss';

export class HeaderMenuItems extends BaseComponent {
    private readonly headerMenuItems: HeaderMenuItem[];

    constructor(){
      super('nav', ['header-nav'])

      const ul = new BaseComponent('ul', ['header-list', 'Roboto-12-15']);
      this.element.appendChild(ul.element);

    function fff(): void {
        console.log('переход на другую страницу');
    }


      this.headerMenuItems = [
          new HeaderMenuItem('../head-images/question.svg', 'About Game', fff),
          new HeaderMenuItem('../head-images/star.svg', 'Best Score', fff),
          new HeaderMenuItem('../head-images/gear.svg', 'Game Settings', fff)
        ];
      for (const value of this.headerMenuItems) {
        ul.element.appendChild(value.element);
      }
      

    }
}