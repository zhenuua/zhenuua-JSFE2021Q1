import { About } from './components/about-page/about-page';
import { Settings } from './components/settings-page/settings-page';
import { Game } from './components/game/game';
import { BestScore } from './components/best-score-page/best-score-page';
import { ImageCategoryModel } from './models/image-category-model';
import { difficulty } from './components/settings-page/select-difficulty';
import { Views } from './shared/constants';

export class App {
  public game?: Game;

  private about?: About;

  private settings?: Settings;

  private bestscore?: BestScore;

  private readonly currentView?: string;

  // private selectDifficulty: SelectDifficulty;

  constructor(private readonly rootElement: HTMLElement, page: string) {
    console.log(1, page);
    // this.game = new Game();
    // this.rootElement.appendChild(this.game.element);
    // this.start();
    console.log(difficulty);

    // this.about = new About();
    // this.rootElement.appendChild(this.about.element);

    // this.settings = new Settings();
    // this.rootElement.appendChild(this.settings.element);

    // this.bestscore = new BestScore();
    // this.rootElement.appendChild(this.bestscore.element);
  }

  //   findOption(selectDifficulty: string) {
  //     const option = selectDifficulty;

  //     selectDifficulty.addEventListener('select', (event) => {
  //       const el = this.element as HTMLInputElement;

  //     })
  //     // Действия над option
  //  }

  refreshPage(page: string) {
    this.rootElement.innerHTML = '';

    if (page === Views.About) {
      this.about = new About();
      this.rootElement.appendChild(this.about.element);
    } else if (page === Views.Game) {
      this.game = new Game();
      this.rootElement.appendChild(this.game.element);
      this.start();
    } else if (page === Views.Score) {
      this.bestscore = new BestScore();
      this.rootElement.appendChild(this.bestscore.element);
    } else if (page === Views.Settings) {
      this.settings = new Settings();
      this.rootElement.appendChild(this.settings.element);
    }
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();

    const cat = categories[2]; // менять в зависимости от настроки
    const images = cat.images.slice(0, difficulty.cardsCount).map((name) => `${cat.category}/${name}`);
    if (this.game) {
      this.game.newGame(images);
    }
  }
}
