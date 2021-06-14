import { BaseComponent } from '../base-components';
import { Button } from '../button/button';
import { PopUpInput } from './pop-up-input';
import { scoreGame } from '../score/score';

export class PopUpField extends BaseComponent {
  private PopUpInputs: PopUpInput[];

  private readonly buttonAddUser: Button;

  private readonly buttonCancel: Button;

  constructor() {
    super('div', ['pop-up-field']);
    // Inputs
    const popContainerInput = new BaseComponent('div', ['pop-up-part-field', 'pop-up-part-1']);
    this.element.appendChild(popContainerInput.element);

    const validateName = (textName: string) => {
      const reNumber = /^[0-9]+$/;
      const reSimbols = /[~!@#$%*()_—+=|:;"'`<>,.?/^]+/;
      const reSpace = /^[ ]+$/;

      if (textName.length === 0) {
        return 'Поле не может быть пустым.';
      }
      if (reSpace.test(textName)) {
        return 'Поле не может состоять только из пробелов.';
      }
      if (textName.length > 30) {
        return 'Количество символов не должно превышать 30.';
      }
      if (reNumber.test(textName)) {
        return 'Поле не может состоять только из цифр.';
      }
      if (reSimbols.test(textName)) {
        return 'Поле не может содержать служебные символы.';
      }

      return '';
    };

    const validateEmail = (textEmail: string) => {
      const reMail = /\S+@\S+\.\S+/;

      if (!reMail.test(textEmail)) {
        return 'Вы ввели некорректный email.';
      }
      if (textEmail.length === 0) {
        return 'Поле не может быть пустым.';
      }
      if (textEmail.length > 30) {
        return 'Количество символов не должно превышать 30.';
      }

      return '';
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
        validate: validateName,
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

    this.buttonAddUser = new Button('Add score', ['botton-pop-up', 'add-user-botton', 'disabled']);
    buttonsBlock.element.appendChild(this.buttonAddUser.element);
    this.buttonAddUser.element.addEventListener('click', this.addScore);

    this.buttonCancel = new Button('Сancel', ['botton-pop-up', 'add-user-cancel']);
    buttonsBlock.element.appendChild(this.buttonCancel.element);
    this.buttonCancel.element.addEventListener('click', this.Сancel);
  }

  addScore = () : void => {
    const nameInput = this.PopUpInputs[0].element.querySelector('.input-field') as HTMLInputElement;
    const lastNameInput = this.PopUpInputs[1].element.querySelector('.input-field') as HTMLInputElement;
    const emailInput = this.PopUpInputs[2].element.querySelector('.input-field') as HTMLInputElement;

    const newScore = {
      name: `${nameInput.value} ${lastNameInput.value}`,
      email: emailInput.value,
      score: scoreGame.score,
    };
    const close = document.querySelector('.showPopUp');
    const oldScores = window.localStorage.getItem('scores');
    if (oldScores) {
      const oldScoresArray = JSON.parse(oldScores);
      oldScoresArray.push(newScore);
      window.localStorage.setItem('scores', JSON.stringify(oldScoresArray));
      if (close) {
        close.classList.remove('showPopUp');
      }
    } else {
      window.localStorage.setItem('scores', JSON.stringify([newScore]));
      if (close) {
        close.classList.remove('showPopUp');
      }
    }
  };

  Сancel = () : void => {
    const close = document.querySelector('.showPopUp');
    if (close) {
      close.classList.remove('showPopUp');
    }
  };
}
