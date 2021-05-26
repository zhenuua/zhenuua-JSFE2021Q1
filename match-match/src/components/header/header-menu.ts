import {HeaderMenuItems} from './header-menu-items';
import {BaseComponent} from '../base-components';

import './header.scss';

export class HeaderMenu extends BaseComponent {
    
    private readonly headerMenuItems: HeaderMenuItems;
    constructor(){
        
      super('div', ['header-menu'])


      this.headerMenuItems = new HeaderMenuItems();
      this.element.appendChild(this.headerMenuItems.element);

    }
}