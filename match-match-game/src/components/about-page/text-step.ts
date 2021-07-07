import { BaseComponent } from '../base-components';

export class TextStep extends BaseComponent {
  constructor(textInstruction: string) {
    super('p', ['text-instruction']);
    this.element.innerHTML = textInstruction;
  }
}
