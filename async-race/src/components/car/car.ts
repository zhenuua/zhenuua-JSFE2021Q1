import { BaseComponent } from '../base-components';
import { CarControl } from './car-control';
import { ReanderCarImage } from './car-image';

import '../header/header.scss';

export class Car extends BaseComponent {
  carControl: CarControl;

  reanderCarImage: ReanderCarImage;

  constructor(option:{ name: string, color: string, id: number }) {
    super('div', ['car']);

    this.carControl = new CarControl(option.name);
    this.element.appendChild(this.carControl.element);

    this.reanderCarImage = new ReanderCarImage(option.color);
    this.element.appendChild(this.reanderCarImage.element);

    const hr = new BaseComponent('hr', ['road']);
    this.element.appendChild(hr.element);
  }
}
