import { BaseComponent } from '../base-components';
import { InputTitle } from './input-title';
import { InputText } from './input-text';
import { InputCheckBox } from './input-checkbox';

export class PopUpInput extends BaseComponent {
  private readonly inputTitle: InputTitle;

  private readonly inputText: InputText;

  private readonly inputCheckBox: InputCheckBox;

  constructor(option: { inputTitleText: string, placeHolder: string }) {
    super('div', ['pop-up-input']);
    // Name-Block
    const nameBlock = new BaseComponent('div', ['name-block']);
    this.element.appendChild(nameBlock.element);

    this.inputTitle = new InputTitle(option.inputTitleText);
    nameBlock.element.appendChild(this.inputTitle.element);

    this.inputText = new InputText(option.placeHolder);
    nameBlock.element.appendChild(this.inputText.element);

    // CheckBox
    const checkbox = new BaseComponent('div', ['backgroung-checkbox']);
    this.element.appendChild(checkbox.element);

    this.inputCheckBox = new InputCheckBox();
    checkbox.element.appendChild(this.inputCheckBox.element);
  }
}
