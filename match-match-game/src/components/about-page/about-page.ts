import { BaseComponent } from '../base-components';
import { Title } from '../title/title';
import { AboutItems } from './about-items';
// import { PopUp } from '../pop-up-registration/pop-up';

import './about-page.scss';

export class About extends BaseComponent {
  private readonly title: Title;

  private readonly aboutItems: AboutItems;

  // private readonly popup: PopUp;

  constructor() {
    super('section', ['how-to-play-field']);
    this.title = new Title('How to play?', ['title-about']);
    this.element.appendChild(this.title.element);

    this.aboutItems = new AboutItems();
    this.element.appendChild(this.aboutItems.element);

    // this.popup = new PopUp();
    // this.element.appendChild(this.popup.element);
  }
}
