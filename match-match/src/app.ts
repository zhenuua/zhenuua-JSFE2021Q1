import { Header } from './components/header/header';
//import { HeaderMenu } from './components/header/header-menu';

import { Game } from './components/game/game';
import { ImageCategoryModel } from './models/image-category-model';




export class App {
  
  private readonly game: Game;
  //private readonly header: Header;

  constructor(private readonly rootElement: HTMLElement) {
    //this.header = new Header();
    this.game = new Game(); // Game - страница с игрой на ряду со страницами: со скором, об игре
    //this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.game.element);
  }
  trigger(){
    console.log('fffffff');
    
  }
  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();

    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}
