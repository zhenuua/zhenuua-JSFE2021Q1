import {HeaderMenuItems} from './header-menu-items';
import {BaseComponent} from '../base-components';

import './header.scss';

export class HeaderMenuItem extends BaseComponent {

    constructor(image: string, text: string, handler: () => void){
      super('li', ['header-item'])

      

      const img = new BaseComponent('img', ['logo-about-game']);
      img.element.setAttribute('src', image);
      this.element.appendChild(img.element);

      const a = new BaseComponent('a', ['no-class']);
      this.element.appendChild(a.element);
      a.element.innerHTML = text;
      //this.element.innerHTML = text;

      this.element.addEventListener('click', handler)
    }


}