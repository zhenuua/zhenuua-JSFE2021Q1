import { BaseComponent } from '../base-components';
import { PopUpContent } from './pop-up-content';

import './pop-up.scss';

export class PopUp extends BaseComponent {
  private readonly PopUpcontent: PopUpContent;

  constructor() {
    super('div', ['popup-main']);

    const popUpBody = new BaseComponent('div', ['popup-body']);
    this.element.appendChild(popUpBody.element);

    this.PopUpcontent = new PopUpContent();
    popUpBody.element.appendChild(this.PopUpcontent.element);
  }

  showPopUp() : void {
    this.PopUpcontent.refreshScore();
    this.element.classList.add('showPopUp');
  }

  closePopUp() : void {
    this.element.classList.remove('showPopUp');
  }
}
