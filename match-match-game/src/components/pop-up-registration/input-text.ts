import { BaseComponent } from '../base-components';

export class InputText extends BaseComponent {
  constructor(placeHolder: string, validate: (text: string) => boolean) {
    super('input', ['input-field', 'Roboto-16-24']);
    this.element.setAttribute('type', 'text');
    this.element.setAttribute('placeHolder', placeHolder);

    this.element.addEventListener('keydown', (event) => {
      const el = this.element as HTMLInputElement;
      if (el.value) {
        validate(el.value);
        // this.element.Classlist.add('.mistake')
      }
    });
  }
}
