import './styles.scss';
import { App } from './app';
import { Header } from './components/header/header';
window.onload = () => {
  
  // const main = document.createElement('div');
  // main.classList.add('main');
  // document.body.appendChild(main);

  
  const header = new Header();
  document.body.appendChild(header.element);

  
  const playZone = document.createElement('main');
  playZone.classList.add('background-play-zone');
  document.body.appendChild(playZone);
  playZone.setAttribute('id', 'app');

  const appElement = document.getElementById('app');
  //const headerAll = document.getElementsByClassName('header-article');

  if (!appElement) throw Error('App root element not found');
  new App(appElement).start();
  //new Header(headerAll);
};
