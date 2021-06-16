import { BaseComponent } from '../base-components';
import { Car } from './car';

import '../header/header.scss';

const base = 'http://127.0.0.1:3000';
const garage = `${base}/garage`;

export class CarField extends BaseComponent {
  cars: Car[];

  constructor() {
    super('div', ['rece-field']);

    this.cars = [
      new Car({ name: 'Tesla', color: '#e6e6fa', id: 1 }),
      new Car({ name: 'BMW', color: '#fede00', id: 2 }),
      new Car({ name: 'Mersedes', color: '#6c779f', id: 3 }),
      new Car({ name: 'Ford', color: '#ef3c40', id: 4 }),
    ];
    for (const value of this.cars) {
      this.element.appendChild(value.element);
    }
    // const page = 1;
    //     const getCars = async (page: number, MAX_CARS_ON_PAGE = 7) => {
    //       const response = await fetch(`${garage}/?_page=${page}&_limit=${MAX_CARS_ON_PAGE}`);
    //       console.log(response);
    //       return {
    //         items: await response.json(),
    //         count: response.headers.get('X-Total-Count'),
    //       };
    //     };

    fetch(`${garage}`)
      .then((response) => response.json())
      .then((data) => {
        this.cars = data;
        console.log(this.cars);
      });
    console.log(this.cars, 1);
  }
}
