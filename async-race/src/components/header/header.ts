import { BaseComponent } from '../base-components';
import { Button } from '../button/button';

import './header.scss';

export class Header extends BaseComponent {
  constructor() {
    super('header', ['header-field']);

    const buttonGoGarage = new Button('to garage', ['button-menu']);
    this.element.appendChild(buttonGoGarage.element);
    const buttongoWinners = new Button('to winners', ['button-menu']);
    this.element.appendChild(buttongoWinners.element);

    //   function menuHandler(page: string) {
    //     return () => {
    //       console.log(page);
    //       changeCurrentView(page);
    //     }

    //   }

    //   const goGarage = document.querySelectorAll('.button-menu')[0];

    //   goGarage?.addEventListener('click', menuHandler('Garage'));

  //   const goWinners = document.querySelectorAll('.button-menu')[1];
  //   goWinners?.addEventListener('click', menuHandler('Winners'));
  }
}
