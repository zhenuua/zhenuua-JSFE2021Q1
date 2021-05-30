import './styles.scss';
import { App } from './app';
import { Header } from './components/header/header';

let page = 'About'; // НАДО! -  About

window.onload = () => {
  function changeCurrentView(newView: string) {
    page = newView;
    console.log(page);
  }

  const header = new Header(changeCurrentView);
  document.body.appendChild(header.element);

  const logoButton = document.querySelector('.logo-header');
  if (!logoButton) throw Error('mainButton not found');
  logoButton.addEventListener('click', () => { page = 'About'; });

  const mainButton = document.querySelector('.button-game');
  if (!mainButton) throw Error('mainButton not found');
  mainButton.addEventListener('click', () => { page = 'Game'; });

  const main = document.createElement('main');
  document.body.appendChild(main);
  main.setAttribute('id', 'app');

  const appElement = document.getElementById('app');

  if (!appElement) throw Error('App root element not found');
  const app = new App(appElement, page);
  // убрать const? в 24 строке без const линтер= Do not use 'new' for side effects  no-new
};
