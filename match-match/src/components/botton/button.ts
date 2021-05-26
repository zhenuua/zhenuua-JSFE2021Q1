import {BaseComponent} from '../base-components';

import '../header/header.scss';

export class Button extends BaseComponent {

    constructor(text: string){   // styles: string[] = []
      super('button', ['botton-stop-game', 'Roboto-500-14'])
      this.element.innerHTML = text;

      
    }
}