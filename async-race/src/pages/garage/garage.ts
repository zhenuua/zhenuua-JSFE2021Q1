import { BaseComponent } from '../../components/base-components';
import { CarField } from '../../components/car/car-field';
import { Footer } from '../../components/footer/footer';
import { Setting } from '../../components/settings/setting';
import { Title } from '../../components/title/title';

// import './garage.scss';

export class Garage extends BaseComponent {
  setting : Setting;

  titleGarage : Title;

  titlePage: Title;

  carField: CarField;

  constructor() {
    super('section', ['garage']);

    this.setting = new Setting();
    this.element.appendChild(this.setting.element);

    const cars = 4;
    this.titleGarage = new Title(`Garage(${cars})`, ['title-page__bigSize']);
    this.element.appendChild(this.titleGarage.element);

    const nnn = 1; // убрать
    this.titlePage = new Title(`Page #${nnn}`, ['title-page__smallSize']);
    this.element.appendChild(this.titlePage.element);

    this.carField = new CarField();
    this.element.appendChild(this.carField.element);

    const footer = new Footer();
    this.element.appendChild(footer.element);
  }
}
