import { BaseComponent } from '../base-components';
import { SelectCards } from './select-game-cards';
import { HrElement } from '../hr/hr';
import { Title } from '../title/title';

export class SettingsItemCards extends BaseComponent {
  private readonly selectCards: SelectCards;

  private readonly hr: HrElement;

  private readonly title: Title;

  constructor() {
    super('div', ['setting-field']);

    this.title = new Title('Game cards');
    this.element.appendChild(this.title.element);

    this.selectCards = new SelectCards();
    this.element.appendChild(this.selectCards.element);

    this.hr = new HrElement(['demarcation-line-setting']);
    this.element.appendChild(this.hr.element);
  }
}
