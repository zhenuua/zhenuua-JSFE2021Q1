import { BaseComponent } from '../base-components';

export class InputText extends BaseComponent {
  constructor(placeHolder: string, validate: (text: string) => string) {
    super('input', ['input-field', 'Roboto-16-24']);
    this.element.setAttribute('type', 'text');
    this.element.setAttribute('placeHolder', placeHolder);

    this.element.addEventListener('input', () => {
      const elInput = this.element as HTMLInputElement;

      if (elInput.value || elInput.value === '') {
        const isValid = validate(elInput.value);
        const errorText = elInput?.parentElement?.parentElement?.querySelector('.error-field');
        const checkbox = elInput?.parentElement?.parentElement?.querySelector('.checkbox-name');
        if (errorText) {
          const checkName = document.querySelectorAll('.checkbox-name')[0] as HTMLInputElement;
          const checkLastName = document.querySelectorAll('.checkbox-name')[1] as HTMLInputElement;
          const checkEmail = document.querySelectorAll('.checkbox-name')[2] as HTMLInputElement;

          errorText.textContent = isValid;

          if (isValid === '') {
            checkbox?.setAttribute('checked', '');
          } else {
            checkbox?.removeAttribute('checked');
          }

          if (checkName.hasAttribute('checked')
            && checkLastName.hasAttribute('checked')
            && checkEmail.hasAttribute('checked')) {
            document.querySelector('.add-user-botton')?.classList.remove('disabled');
          } else {
            document.querySelector('.add-user-botton')?.classList.add('disabled');
          }
        }
      }
    });
  }
}
