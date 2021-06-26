import { BaseComponent } from '../../components/base-components';

import './winners.scss';

export class Winners extends BaseComponent {
  constructor() {
    super('section', ['winners']);
    this.element.innerHTML = `
    <div class="table">
      <div class="head-table">
        <div class="head-item">#</div>
        <div class="head-item">Car Image</div>
        <div class="head-item">Name</div>
        <div class="head-item">Total Wins</div>
        <div class="head-item">Time (sec)</div>
      </div>
      <div class="winner">
        <div class="head-item">1</div>
        <div class="head-item"><img src="./sedan-car-model.svg"></div>
        <div class="head-item">Super Racer</div>
        <div class="head-item">3</div>
        <div class="head-item">2.75</div>
      </div>
    </div>`;
  }
}
