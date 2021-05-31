import { BaseComponent } from '../base-components';
import { SelectDifficulty } from './select-difficulty';
import { HrElement } from '../hr/hr';
import { Title } from '../title/title';

export class SelectItemDifficulty extends BaseComponent {
  private readonly selectDifficulty: SelectDifficulty;

  private readonly hr: HrElement;

  private readonly title: Title;

  constructor() {
    super('div', ['setting-field']);

    this.title = new Title('Difficulty');
    this.element.appendChild(this.title.element);

    this.selectDifficulty = new SelectDifficulty();
    this.element.appendChild(this.selectDifficulty.element);

    this.hr = new HrElement(['demarcation-line-setting']);
    this.element.appendChild(this.hr.element);
  }
}
