// import { About } from './about-page/about-page';
// import { Settings } from './settings-page/settings-page';
// import { Game } from './game/game';
// import { BestScore } from './best-score-page/best-score-page';
// import { ImageCategoryModel } from '../models/image-category-model';
// import { difficulty } from './settings-page/select-difficulty';
// import { typeCards } from './settings-page/select-game-cards';
// import { Views } from '../shared/constants';

const base = 'http://127.0.0.1:3000';

const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;

export const getCars = async (page: number, MAX_CARS_ON_PAGE = 7) => {
  const response = await fetch(`${garage}/?_page=${page}&_limit=${MAX_CARS_ON_PAGE}`);

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};

export const getCar = async (id: number) => (await fetch(`${garage}/${id}`)).json();

export const createCar = async (body: string) => (await fetch(garage, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

export const deleteCar = async (id: number) => (await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();

export const updateCar = async (id: number, body: string) => (await fetch(`${garage}/${id}`, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

// export class App {
//   public garage?: Garage;

//   private winners?: Winners;

//   private readonly currentView?: string;

//   constructor(private readonly rootElement: HTMLElement) {

//   }

//   refreshPage(page: string) : void {
//     this.rootElement.innerHTML = '';

//     if (page === 'Garage') {
//       this.garage = new Garage();
//       this.rootElement.appendChild(this.garage.element);
//     } else if (page === Views.Game) {
//       this.winners = new Winners();
//       this.rootElement.appendChild(this.winners.element);
//     }
//   }

// }
