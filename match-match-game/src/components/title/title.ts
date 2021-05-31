import { BaseComponent } from '../base-components';

// import './title.scss';

export class Title extends BaseComponent {
  constructor(text: string, styleTitle: string[] = []) {
    super('h2', ['Roboto-500-20'].concat(styleTitle));
    this.element.innerHTML = text;
  }
}
