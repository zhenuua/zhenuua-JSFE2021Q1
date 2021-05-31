import { BaseComponent } from '../base-components';
import { Button } from '../button/button';
import { PopUpInput } from './pop-up-input';

export class PopUpField extends BaseComponent {
  private readonly PopUpInputs: PopUpInput[];

  private readonly buttonAddUser: Button;

  private readonly buttonCancel: Button;

  constructor() {
    super('div', ['pop-up-field']);
    // Inputs
    const popContainerInput = new BaseComponent('div', ['pop-up-part-field', 'pop-up-part-1']);
    this.element.appendChild(popContainerInput.element);

    const validateName = (textName: string) => {
      console.log(textName);
      return false;
    };
    const validateLastName = (textLastName: string) => {
      console.log(textLastName);
      return false;
    };
    const validateEmail = (textEmail: string) => {
      console.log(textEmail);
      return false;
    };

    this.PopUpInputs = [
      new PopUpInput({
        inputTitleText: 'First Name',
        placeHolder: 'Jessie',
        validate: validateName,
      }),
      new PopUpInput({
        inputTitleText: 'Last Name',
        placeHolder: 'Doe',
        validate: validateLastName,
      }),
      new PopUpInput({
        inputTitleText: 'E-mail',
        placeHolder: 'Jessie.Doe@gmail.com',
        validate: validateEmail,
      }),
    ];

    for (const value of this.PopUpInputs) {
      popContainerInput.element.appendChild(value.element);
    }

    // Bottons
    const popContainerBottons = new BaseComponent('div', ['pop-up-part-field', 'pop-up-part-2']);
    this.element.appendChild(popContainerBottons.element);

    const img = new BaseComponent('img', ['add-photo']);
    img.element.setAttribute('src', './about-images/logo-profile-without-photo-plus.svg');
    popContainerBottons.element.appendChild(img.element);

    const buttonsBlock = new BaseComponent('div', ['botton-pop-up-field']);
    popContainerBottons.element.appendChild(buttonsBlock.element);

    this.buttonAddUser = new Button('Add user', ['botton-pop-up', 'add-user-botton', 'disabled']);
    buttonsBlock.element.appendChild(this.buttonAddUser.element);

    this.buttonCancel = new Button('cancel', ['botton-pop-up', 'add-user-cancel']);
    buttonsBlock.element.appendChild(this.buttonCancel.element);
  }
}
