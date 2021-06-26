import { BaseComponent } from '../base-components';

export class InputText extends BaseComponent {
  constructor() {
    super('input', ['input']);
    this.element.setAttribute('type', 'text');

    this.element.addEventListener('input', () => {
      const elInputCreate = document.getElementById('inputTextCreate') as HTMLInputElement;
      const elInputUpdate = document.getElementById('inputTextUpdate') as HTMLInputElement;

      document.querySelector('.create-btn')?.classList.add('disabled');
      document.querySelector('.update-btn')?.classList.add('disabled');
      if (elInputCreate.value !== '') {
        document.querySelector('.create-btn')?.classList.remove('disabled');
      }
      if (elInputUpdate.value !== '') {
        document.querySelector('.update-btn')?.classList.remove('disabled');
      }
    });
  }
}
