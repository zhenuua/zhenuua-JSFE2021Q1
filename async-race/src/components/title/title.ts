import { BaseComponent } from '../base-components';

import './title.scss';

export class Title extends BaseComponent {
  constructor(text: string, styleTitle: string[] = []) {
    super('h2', ['title-page'].concat(styleTitle));
    this.element.innerHTML = text;
  }
}
