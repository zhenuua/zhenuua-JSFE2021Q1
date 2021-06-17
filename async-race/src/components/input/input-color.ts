import { BaseComponent } from '../base-components';

export class InputColor extends BaseComponent {
  constructor() { // placeHolder: string, validate: (text: string) => string
    super('input', ['palette']);
    this.element.setAttribute('type', 'color');
    this.element.setAttribute('value', '#000000');
    this.element.setAttribute('id', 'create-color-car');

    this.element.addEventListener('input', () => {
      // const elInput = this.element as HTMLInputElement;
      // let color = elInput.value
      // console.log(elInput.value);

    });
  }
}
