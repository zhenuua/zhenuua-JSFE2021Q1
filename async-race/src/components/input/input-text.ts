import { BaseComponent } from '../base-components';

export class InputText extends BaseComponent {
  constructor() { // validate: (text: string) => string
    super('input', ['input']);
    this.element.setAttribute('type', 'text');
    // this.element.setAttribute('id', 'create-name-car');

    this.element.addEventListener('input', () => {
      // const elInput = this.element as HTMLInputElement;
      // let nameCar = elInput.value;
      // console.log(elInput.value);

    });
  }
}
