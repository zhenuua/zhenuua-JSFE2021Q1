import { BaseComponent } from '../../components/base-components';
import { CarField } from '../../components/car/car-field';
import { Footer } from '../../components/footer/footer';
import { Setting } from '../../components/settings/setting';
import { Title } from '../../components/title/title';
import { Quantity } from '../../shared/constants';

export class Garage extends BaseComponent {
  setting : Setting;

  titleGarage : Title;

  titlePage: Title;

  carField: CarField;

  constructor() {
    super('section', ['garage']);
    this.carField = new CarField(this.refreshQuantityCars.bind(this));
    this.setting = new Setting(this.carField);
    this.element.appendChild(this.setting.element);

    this.titleGarage = new Title(`Garage(${Quantity.quantityCars})`, ['title-page__bigSize']);
    this.element.appendChild(this.titleGarage.element);

    const numberPage = 1;
    this.titlePage = new Title(`Page #${numberPage}`, ['title-page__smallSize']);
    this.element.appendChild(this.titlePage.element);

    this.element.appendChild(this.carField.element);

    const footer = new Footer();
    this.element.appendChild(footer.element);
  }

  refreshQuantityCars() : void {
    if (this.titleGarage) {
      this.titleGarage.element.innerHTML = `Garage(${Quantity.quantityCars})`;
    }
  }
}
