import { BaseComponent } from '../../components/base-components';

// import './winners.scss';

export class Winners extends BaseComponent {
  constructor() {
    super('section', ['winners']);
    this.element.innerHTML = 'Table of winners';
  }
}
