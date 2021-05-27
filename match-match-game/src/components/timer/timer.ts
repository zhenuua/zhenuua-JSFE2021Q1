import { BaseComponent } from '../base-components';

import '../../styles.scss';

export class Timer extends BaseComponent {
  constructor(time: string) { // handler: () => void    `${min: string}:${sec: string}`
    super('div', ['timer']);

    const timerText = new BaseComponent('div', ['timer-text']);
    this.element.appendChild(timerText.element);

    // timerText.element.innerHTML = text;

    // const min = '00';
    // const sec = '30';
    // time = `${min}:${sec}`;
    timerText.element.innerHTML = time;
  }

  //! нужное! start() {
  //   по кнопке старт стоп
  //   setInterval
  // }
}
