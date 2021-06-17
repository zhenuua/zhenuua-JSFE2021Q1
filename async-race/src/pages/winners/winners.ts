import { BaseComponent } from '../../components/base-components';

export class Winners extends BaseComponent {
  constructor() {
    super('section', ['winners']);
    this.element.innerHTML = 'Table of winners';
  }
}
