import { BaseComponent } from '../base-components';
import { SettingsItemCards } from './settings-item-cards';
import { SelectItemDifficulty } from './settings-item-difficulty';

import './settings-page.scss';

export class Settings extends BaseComponent {
  private readonly settingsItemCards: SettingsItemCards;

  private readonly selectItemDifficulty: SelectItemDifficulty;

  constructor() {
    super('section', ['game-settings']);

    this.settingsItemCards = new SettingsItemCards();
    this.element.appendChild(this.settingsItemCards.element);

    this.selectItemDifficulty = new SelectItemDifficulty();
    this.element.appendChild(this.selectItemDifficulty.element);
  }
}
