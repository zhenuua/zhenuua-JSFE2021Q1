import { BaseComponent } from '../base-components';

import './timer.scss';

export class Timer extends BaseComponent {
  constructor(time: string) { // handler: () => void    `${min: string}:${sec: string}`   SHOW_TIME: number
    super('div', ['timer']);

    const timerText = new BaseComponent('div', ['timer-text']);
    this.element.appendChild(timerText.element);

    // timerText.element.innerHTML = text;

    // const min = '00';
    // const sec = '30';
    // time = `${min}:${sec}`;
    timerText.element.innerHTML = time;
  }

  // // timerBack(SHOW_TIME: number){
  // //   const sec = SHOW_TIME;
  // // }
  // startTimer(sec: number, min: number, SHOW_TIME: number) {
  //   //   по кнопке старт стоп
  //   // delay = SHOW_TIME in cards-field
  //   const time = setInterval(
  //     () => {
  //       if (sec < 59) {
  //         sec = ++sec;
  //       } else {
  //         sec = 0;
  //         if (min < 99) {
  //           min = ++min;
  //         } else {
  //           min = 0;
  //         }
  //       }
  //     }, SHOW_TIME * 1000, 1000,
  //   );

  //   // return time = `${min}:${sec}`
  // }
}
