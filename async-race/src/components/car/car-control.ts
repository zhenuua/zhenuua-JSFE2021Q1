import { BaseComponent } from '../base-components';
import { Button } from '../button/button';

import '../header/header.scss';
import { Title } from '../title/title';

export class CarControl extends BaseComponent {
  buttonSelect: Button;

  buttonRemove: Button;

  titleCar: Title;

  buttonStartEngine: Button;

  buttonStopEngine: Button;

  constructor(modelCar: string, removeCar: ()=> void) { // handlerSelect
    super('div', ['select-remove-car']);

    this.buttonSelect = new Button('select', ['button']);
    this.element.appendChild(this.buttonSelect.element);

    // this.buttonSelect.element.addEventListener('click', handlerSelect)

    this.buttonRemove = new Button('remove', ['button']);
    this.element.appendChild(this.buttonRemove.element);

    this.buttonRemove.element.addEventListener('click', removeCar);

    this.titleCar = new Title(modelCar, ['title-car']);
    this.element.appendChild(this.titleCar.element);

    this.buttonStartEngine = new Button('Start', ['button__start-stop', 'disabled']);
    this.element.appendChild(this.buttonStartEngine.element);

    this.buttonStopEngine = new Button('Stop', ['button__start-stop', 'disabled']);
    this.element.appendChild(this.buttonStopEngine.element);
  }
}
