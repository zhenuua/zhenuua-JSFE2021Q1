import { BaseComponent } from '../base-components';
import { Car } from './car';
import { Get } from '../../shared/constants';

import '../header/header.scss';

export class CarField extends BaseComponent {
  cars: Car[];

  constructor() {
    super('div', ['rece-field']);

    this.cars = [];
    this.getCars();
    // this.removeCar()

    // this.renderCars()
  }

  getCars() {
    fetch(`${Get.garage}`)
      .then((response) => response.json())
      .then((data) => {
        this.cars = data.map((item:{ name: string, color: string, id: number }) => new Car({
          name: item.name, color: item.color, id: item.id,
        }, () => this.removeCar(item.id)));

        this.renderCars();
        console.log(this.cars);
      });
  }

  renderCars() {
    this.element.innerHTML = '';
    for (const value of this.cars) {
      this.element.appendChild(value.element);
    }
  }

  removeCar(id: number) {
    // console.log(id);
    console.log('remove');
    // console.log(this.cars);
    // console.log(this.cars);

    // this.getCars()
    // console.log(garage);

    fetch(`${Get.garage}/${id}`, { method: 'DELETE' })
      .then((response) => response.json())
      .then((data) => {
        this.getCars();
        // this.renderCars();
      });
  }

  // deleteCar(){
  //   async (id: number) => (await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();
  // }
}
