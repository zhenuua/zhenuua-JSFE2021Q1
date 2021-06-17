import { BaseComponent } from '../base-components';
import { Button } from '../button/button';
import { InputColor } from '../input/input-color';
import { InputText } from '../input/input-text';
import { Get } from '../../shared/constants';

const models = ['Tesla', 'Mersedes', 'BMW', 'Toyota', 'LADA', 'Moskvich', 'Opel', 'Great Wall', 'Porshe', 'Aston Martin'];
const names = ['Model S', 'Maybach', 'X5', 'Camry', 'priora', '412', 'Astra', 'H5', 'Cayene', 'DB9'];

export class Setting extends BaseComponent {
  inputColorCreate: InputColor;

  inputTextCreate: InputText;

  buttonCreateCar: Button;

  inputTextUpdate:InputText;

  inputColorUpdate: InputColor;

  buttonUpdateCar: Button;

  buttonRace: Button;

  buttonReset: Button;

  buttonGenerate: Button;

  constructor() {
    super('div', ['settings-race']);

    // Create Car
    const settingCreateCar = new BaseComponent('div', ['setting', 'create-car']);
    this.element.appendChild(settingCreateCar.element);

    this.inputTextCreate = new InputText();
    settingCreateCar.element.appendChild(this.inputTextCreate.element);

    this.inputColorCreate = new InputColor();
    settingCreateCar.element.appendChild(this.inputColorCreate.element);

    this.buttonCreateCar = new Button('create', ['button']);
    settingCreateCar.element.appendChild(this.buttonCreateCar.element);
    this.buttonCreateCar.element.addEventListener('click', () => { this.createCar(); });

    // Update Car
    const settingUpdateCar = new BaseComponent('div', ['setting', 'update-car']);
    this.element.appendChild(settingUpdateCar.element);

    this.inputTextUpdate = new InputText();
    settingUpdateCar.element.appendChild(this.inputTextUpdate.element);
    this.inputTextUpdate.element.classList.add('disabled');

    this.inputColorUpdate = new InputColor();
    settingUpdateCar.element.appendChild(this.inputColorUpdate.element);

    this.buttonUpdateCar = new Button('update', ['button']);
    settingUpdateCar.element.appendChild(this.buttonUpdateCar.element);
    this.buttonUpdateCar.element.classList.add('disabled');

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
    console.log('create');

    const nameCar = this.inputTextCreate.element as HTMLInputElement;
    console.log(nameCar.value);
    const colorCar = this.inputTextCreate.element as HTMLInputElement;
    console.log(colorCar.value);

    // async (id: number) => (await fetch(`${Get.garage}`, { method: 'POST' })).json();
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
    console.log('generate');
    const count = 100;
    const newGenerateCars = new Array(count).fill(1).map((_) => ({ name: this.getRandomName(), color: this.getRandomColor() }));

    console.log(newGenerateCars);
  }
}
