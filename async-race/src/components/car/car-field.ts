import { BaseComponent } from '../base-components';
import { Car } from './car';
import { Get, Quantity } from '../../shared/constants';

import '../header/header.scss';

export class CarField extends BaseComponent {
  cars: Car[];

  refreshQuantityCars: () => void;

  constructor(refreshQuantityCars: () => void) {
    super('div', ['rece-field']);

    this.refreshQuantityCars = refreshQuantityCars;
    this.cars = [];
    this.getCars();
  }

  getCars() {
    fetch(`${Get.garage}`)
      .then((response) => response.json())
      .then((data) => {
        this.cars = data.map((item:{ name: string, color: string, id: number }) => new Car({
          name: item.name, color: item.color, id: item.id,
        }, () => this.removeCar(item.id), () => this.handlerSelect(item.id, item.name, item.color)));

        Quantity.quantityCars = this.cars.length;
        this.refreshQuantityCars();
        this.renderCars();
      });
  }

  renderCars() {
    this.element.innerHTML = '';
    for (const value of this.cars) {
      this.element.appendChild(value.element);
    }
  }

  removeCar(id: number) {
    fetch(`${Get.garage}/${id}`, { method: 'DELETE' })
      .then((response) => response.json())
      .then((data) => {
        this.getCars();
      });
  }

  handlerSelect(id: number, name: string, color: string) {
    const btnUpdate = document.querySelector('.update-btn') as HTMLElement;
    btnUpdate.classList.remove('disabled');
    const nameCar = document.getElementById('inputTextUpdate') as HTMLInputElement;
    const colorCar = document.getElementById('inputColorUpdate') as HTMLInputElement;
    const inputID = document.getElementById('input-id') as HTMLInputElement;
    inputID.value = id.toString();

    nameCar.value = name;
    colorCar.value = color;

    nameCar.classList.remove('disabled');
    this.renderCars();
  }
}
