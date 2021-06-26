import { Header } from './components/header/header';
import { Garage } from './pages/garage/garage';
import { Winners } from './pages/winners/winners';

import './styles.scss';

window.onload = () => {
  const main = document.createElement('main');
  document.body.appendChild(main);
  main.setAttribute('id', 'app');

  const appElement = document.getElementById('app');

  function changeView(page: string) {
    main.innerHTML = '';
    if (page === 'Garage') {
      const garage = new Garage();
      main.appendChild(garage.element);
    } else if (page === 'Winners') {
      const winners = new Winners();
      main.appendChild(winners.element);
    }
  }
  changeView('Garage');

  const header = new Header();
  document.body.insertBefore(header.element, appElement);

  const goGarage = document.querySelectorAll('.button-menu')[0];
  goGarage.addEventListener('click', () => { changeView('Garage'); });

  const goWinners = document.querySelectorAll('.button-menu')[1];
  goWinners.addEventListener('click', () => { changeView('Winners'); });
};
