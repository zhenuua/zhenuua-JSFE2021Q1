import { About } from './components/about-page/about-page';
import { Settings } from './components/settings-page/settings-page';
import { Game } from './components/game/game';
import { BestScore } from './components/best-score-page/best-score-page';
import { ImageCategoryModel } from './models/image-category-model';

export class App {
  private game?: Game;

  private about?: About;

  private settings?: Settings;

  private bestscore?: BestScore;

  private readonly currentView?: string;

  constructor(private readonly rootElement: HTMLElement, page: string) {
    console.log(1, page);

    this.refreshPage(page);

    console.log(2, page);
    // this.game = new Game();
    // this.rootElement.appendChild(this.game.element);
    // this.start();

    // this.about = new About();
    // this.rootElement.appendChild(this.about.element);

    // this.settings = new Settings();
    // this.rootElement.appendChild(this.settings.element);

    // this.bestscore = new BestScore();
    // this.rootElement.appendChild(this.bestscore.element);
  }

  refreshPage(page: string) {
  // удалить все отрисовки и отрисовать нужную
    if (page === 'About') {
      this.about = new About();
      this.rootElement.appendChild(this.about.element);
    } else if (page === 'Game') {
      this.game = new Game();
      this.rootElement.appendChild(this.game.element);
      this.start();
    } else if (page === 'Score') {
      this.bestscore = new BestScore();
      this.rootElement.appendChild(this.bestscore.element);
    } else if (page === 'Settings') {
      this.settings = new Settings();
      this.rootElement.appendChild(this.settings.element);
    }
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();

    const cat = categories[0]; // менять в зависимости от настроки
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    if (this.game) {
      this.game.newGame(images);
    }
  }
}
