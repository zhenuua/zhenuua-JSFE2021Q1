import './styles.scss';
import { App } from './app';
import { Header } from './components/header/header';

let page = 'About'; // НАДО! -  About
let app: App | undefined;

window.onload = () => {
  const main = document.createElement('main');
  document.body.appendChild(main);
  main.setAttribute('id', 'app');

  const appElement = document.getElementById('app');

  function changeCurrentView(newView: string) {
    page = newView;
    if (appElement) {
      if (page !== 'Game') {
        console.log('12345');
        app?.game?.stopGame();
      }
      app = new App(appElement, page);
      app.refreshPage(page);
    }

    console.log(page);
  }

  const header = new Header(changeCurrentView);
  document.body.insertBefore(header.element, appElement);
  // document.body.appendChild(header.element);

  const logoButton = document.querySelector('.logo-header');
  if (!logoButton) throw Error('mainButton not found');
  logoButton.addEventListener('click', () => { page = 'About'; });

  const mainButton = document.querySelector('.button-game');
  if (!mainButton) throw Error('mainButton not found');
  mainButton.addEventListener('click', () => {
    if (!app?.game) {
      if (appElement) {
        app = new App(appElement, 'Game');
        // app.rootElement.innerHTML = '';
        app.refreshPage('Game');
        mainButton.textContent = 'Stop Game';
      }
    } else {
      app.game.stopGame();
      mainButton.textContent = 'Start Game';
      if (appElement) {
        app = new App(appElement, 'Score');
      }
      app.refreshPage('Score');
    }
  });

  if (!appElement) throw Error('App root element not found');
  app = new App(appElement, page);
  app.refreshPage(page);
};
