import { BaseComponent } from '../base-components';
import { Button } from '../button/button';
import { InputColor } from '../input/input-color';
import { InputText } from '../input/input-text';
import { Get } from '../../shared/constants';
import { CarField } from '../car/car-field';
import { InputId } from '../input/input-id';

const models = ['Tesla', 'Mersedes', 'BMW', 'Toyota', 'LADA', 'Moskvich', 'Opel', 'Great Wall', 'Porshe', 'Aston Martin'];
const names = ['Model S', 'Maybach', 'X5', 'Camry', 'priora', '412', 'Astra', 'H5', 'Cayene', 'DB9'];

export class Setting extends BaseComponent {
  inputId: InputId;

  inputColorCreate: InputColor;

  inputTextCreate: InputText;

  buttonCreateCar: Button;

  inputTextUpdate:InputText;

  inputColorUpdate: InputColor;

  buttonUpdateCar: Button;

  buttonRace: Button;

  buttonReset: Button;

  buttonGenerate: Button;

  carField:CarField;

  constructor(carField: CarField) {
    super('div', ['settings-race']);

    this.carField = carField;
    // Create Car

    const settingCreateCar = new BaseComponent('div', ['setting', 'create-car']);
    this.element.appendChild(settingCreateCar.element);

    this.inputTextCreate = new InputText();
    settingCreateCar.element.appendChild(this.inputTextCreate.element);
    this.inputTextCreate.element.setAttribute('id', 'inputTextCreate');

    this.inputColorCreate = new InputColor();
    settingCreateCar.element.appendChild(this.inputColorCreate.element);

    this.buttonCreateCar = new Button('create', ['button', 'create-btn']);
    this.buttonCreateCar.element.classList.add('disabled');
    settingCreateCar.element.appendChild(this.buttonCreateCar.element);

    this.buttonCreateCar.element.addEventListener('click', () => { this.createCar(); });

    // Update Car
    const settingUpdateCar = new BaseComponent('div', ['setting', 'update-car']);
    this.element.appendChild(settingUpdateCar.element);

    this.inputTextUpdate = new InputText();
    settingUpdateCar.element.appendChild(this.inputTextUpdate.element);
    this.inputTextUpdate.element.classList.add('disabled');
    this.inputTextUpdate.element.setAttribute('id', 'inputTextUpdate');

    this.inputColorUpdate = new InputColor();
    settingUpdateCar.element.appendChild(this.inputColorUpdate.element);
    this.inputColorUpdate.element.setAttribute('id', 'inputColorUpdate');

    this.buttonUpdateCar = new Button('update', ['button', 'update-btn']);
    settingUpdateCar.element.appendChild(this.buttonUpdateCar.element);
    this.buttonUpdateCar.element.classList.add('disabled');

    this.inputId = new InputId();
    settingUpdateCar.element.appendChild(this.inputId.element);

    this.buttonUpdateCar.element.addEventListener('click', () => { this.updateCar(); });

    // Buttons Race
    const settingButtonsRace = new BaseComponent('div', ['setting', 'buttons-rece']);
    this.element.appendChild(settingButtonsRace.element);

    this.buttonRace = new Button('rece', ['button']);
    settingButtonsRace.element.appendChild(this.buttonRace.element);

    this.buttonReset = new Button('reset', ['button']);
    settingButtonsRace.element.appendChild(this.buttonReset.element);
    this.buttonReset.element.classList.add('disabled');

    this.buttonGenerate = new Button('generate cars', ['button', 'button__generate']);
    settingButtonsRace.element.appendChild(this.buttonGenerate.element);
    this.buttonGenerate.element.addEventListener('click', () => { this.generateRandomCars(); });
  }

  createCar() {
    const nameCar = this.inputTextCreate.element as HTMLInputElement;
    const colorCar = this.inputColorCreate.element as HTMLInputElement;

    fetch(`${Get.garage}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: nameCar.value,
        color: colorCar.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.carField.getCars();
      });

    nameCar.value = '';
    colorCar.value = '#ff0000';
  }

  getRandomName = () : string => {
    const model = models[Math.floor(Math.random() * models.length)];
    const name = names[Math.floor(Math.random() * names.length)];
    return `${model} ${name}`;
  };

  getRandomColor = () : string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  generateRandomCars() {
    const count = 100;
    const newGenerateCars = new Array(count).fill(1).map((_) => ({ name: this.getRandomName(), color: this.getRandomColor() }));
    for (let i = 0; i < newGenerateCars.length; i++) {
      fetch(`${Get.garage}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newGenerateCars[i].name,
          color: newGenerateCars[i].color,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.carField.getCars();
        });
    }
  }

  updateCar() {
    this.buttonUpdateCar.element.classList.add('disabled');
    const nameCar = document.getElementById('inputTextUpdate') as HTMLInputElement;
    const colorCar = document.getElementById('inputColorUpdate') as HTMLInputElement;
    const inputID = document.getElementById('input-id') as HTMLInputElement;
    const id = inputID.value;

    fetch(`${Get.garage}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: nameCar.value,
        color: colorCar.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.carField.getCars();
        inputID.value = '';
        nameCar.value = '';
        colorCar.value = '';
      });
  }
}
