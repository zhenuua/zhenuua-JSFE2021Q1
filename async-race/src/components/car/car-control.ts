import { BaseComponent } from '../base-components';
import { Button } from '../button/button';

import '../header/header.scss';
import { Title } from '../title/title';

export class CarControl extends BaseComponent {
  buttonSelect: Button;

  buttonRemove: Button;

  titleCar: Title;

  constructor(modelCar: string) {
    super('div', ['select-remove-car']);

    this.buttonSelect = new Button('select', ['button']);
    this.element.appendChild(this.buttonSelect.element);

    this.buttonRemove = new Button('remove', ['button']);
    this.element.appendChild(this.buttonRemove.element);

    this.titleCar = new Title(modelCar, ['title-car']);
    this.element.appendChild(this.titleCar.element);

    // this.element.innerHTML = text;
  }
}
