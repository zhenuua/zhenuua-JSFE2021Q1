import { BaseComponent } from '../base-components';
import { AboutItem } from './about-item';

export class AboutItems extends BaseComponent {
  private readonly aboutItems: AboutItem[];

  constructor() {
    super('div', ['all-steps-instructions']);

    this.aboutItems = [
      new AboutItem({
        image: './about-images/about-image-1.png',
        textStepInner: 'Register new player in game',
        numberStepInner: 1,
        style: ['instruction-1'],
      }),
      new AboutItem({
        image: './about-images/about-image-2.png',
        textStepInner: 'Configure your game settings',
        numberStepInner: 2,
        style: ['instruction-2'],
      }),
      new AboutItem({
        image: './about-images/about-image-3.png',
        textStepInner: 'Start you new game! Remember card positions and match it before times up.',
        numberStepInner: 3,
        style: ['instruction-3'],
      }),
    ];
    for (const value of this.aboutItems) { // forEach
      this.element.appendChild(value.element);
    }
  }
}
