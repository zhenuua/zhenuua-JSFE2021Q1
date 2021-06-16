import { BaseComponent } from '../base-components';
import { Button } from '../button/button';

export class Footer extends BaseComponent {
  buttonPrev: Button;

  buttonNext: Button;

  constructor() {
    super('footer', ['footer']);
    this.buttonPrev = new Button('prev', ['button']);
    this.element.appendChild(this.buttonPrev.element);

    this.buttonNext = new Button('next', ['button']);
    this.element.appendChild(this.buttonNext.element);
  }
}
