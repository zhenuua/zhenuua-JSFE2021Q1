import { BaseComponent } from '../base-components';

export class Setting extends BaseComponent {
  constructor() {
    super('div', ['settings-race']);

    this.element.innerHTML = `<div class="setting create-car">
    <input class="input" id="create-name" type="text">
    <input class="palette" id="create-color-car" type="color" value="#ffffff">
    <button class="button">create</button>
  </div>
  <div class="setting update-car">
    <input class="input" id="create-name-car" type="text" disabled>
    <input class="palette" type="color" value="#ff0000" disabled>
    <button class="button">update</button>
  </div>
  <div class="setting buttons-rece">
    <button class="button">rece</button>
    <button class="button">reset</button>
    <button class="button button__generate">generate cars</button>
  </div>`;
  }
}
