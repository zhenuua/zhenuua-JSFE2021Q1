import './styles.scss';
import { App } from './app';
import { Header } from './components/header/header';
import { Views, ButtonsNames } from './shared/constants';

let page = 'About';
let app: App | undefined;

window.onload = () => {
  const main = document.createElement('main');
  document.body.appendChild(main);
  main.setAttribute('id', 'app');

  const appElement = document.getElementById('app');

  function changeCurrentView(newView: string) {
    page = newView;
    if (appElement) {
      if (page !== Views.Game) {
        app?.game?.stopGame();
      }
      app = new App(appElement);
      app.refreshPage(page);
    }
  }

  const header = new Header(changeCurrentView);
  document.body.insertBefore(header.element, appElement);

  const logoButton = document.querySelector('.logo-header');
  if (!logoButton) throw Error('mainButton not found');
  logoButton.addEventListener('click', () => { page = 'About'; });

  const mainButton = document.querySelector('.button-game');
  if (!mainButton) throw Error('mainButton not found');
  mainButton.addEventListener('click', () => {
    if (!app?.game) {
      if (appElement) {
        app = new App(appElement);
        app.refreshPage(Views.Game);
        mainButton.textContent = ButtonsNames.stopGame;
      }
    } else {
      app.game.stopGame();
      mainButton.textContent = ButtonsNames.startGame;
      if (appElement) {
        app = new App(appElement);
      }
      app.refreshPage(Views.Score);
    }
  });

  if (!appElement) throw Error('App root element not found');
  app = new App(appElement);
  app.refreshPage(page);
};
