import { BaseComponent } from '../base-components';

export class Title extends BaseComponent {
  constructor(text: string) { // styles: string[] = []
    super('h2', ['Roboto-500-20', 'title-about']); // title-about перекинуть в
    this.element.innerHTML = text;
  }
}
