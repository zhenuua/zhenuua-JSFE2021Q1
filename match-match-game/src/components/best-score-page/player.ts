import { BaseComponent } from '../base-components';
import { EmailPlayer } from './email';
import { NamePlayer } from './name';
import { Score } from './score';

export class Player extends BaseComponent {
  private readonly emailPlayer: EmailPlayer;

  private readonly namePlayer: NamePlayer;

  score: Score;

  constructor(option:{ name: string, email: string, score: number }) {
    super('div', ['player-score']);

    // block with Name and Email
    const nameBlock = new BaseComponent('div', ['score-block']);
    this.element.appendChild(nameBlock.element);

    const p = new BaseComponent('p', ['score', 'Roboto-500-14']);
    nameBlock.element.appendChild(p.element);

    const img = new BaseComponent('img', ['image-of-player']);
    img.element.setAttribute('src', './users-images/logo-profile-without-photo.svg');
    nameBlock.element.appendChild(img.element);

    const info = new BaseComponent('div', ['info-about-player']);
    nameBlock.element.appendChild(info.element);

    const textName = option.name; // NAME
    this.namePlayer = new NamePlayer(textName);
    info.element.appendChild(this.namePlayer.element);

    const textEmail = option.email; // EMAIL
    this.emailPlayer = new EmailPlayer(textEmail);
    info.element.appendChild(this.emailPlayer.element);

    // block with Score
    const scoreBlock = new BaseComponent('div', ['score-block']);
    this.element.appendChild(scoreBlock.element);

    const ptext = new BaseComponent('p', ['score', 'Roboto-500-14']);
    ptext.element.innerHTML = 'Score';
    scoreBlock.element.appendChild(ptext.element);

    this.score = new Score(option.score); // SCORE
    scoreBlock.element.appendChild(this.score.element);
  }
}
