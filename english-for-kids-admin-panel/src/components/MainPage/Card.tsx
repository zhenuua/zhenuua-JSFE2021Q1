import React from 'react';
import { Views, ButtonsNames, linkIcon } from '../../assets/constants';

interface MyProps {
  title: string,
  imgSrc: string,
  nameButtonGame: string,
  translation?: string,
  audioSrc?: string,
  activeGameMode?: string,
  changeCategory: (page: string) => void,
  compaireCurrentSound: (sound: string) => boolean,
}
interface MyState {
  playMode: boolean,
  isFlipped: boolean,
  disabled: boolean
}

export default class Card extends React.Component<MyProps, MyState> {

  state = {
    playMode: false,
    isFlipped: false,
    disabled: false
  }

  clickCard(title: string) {

    if (this.props.audioSrc) {
      if (this.props.activeGameMode === Views.PLAY_MODE && this.props.nameButtonGame === ButtonsNames.REPEAT_WORD) {
        if (this.props.compaireCurrentSound(this.props.audioSrc)) {
          this.setState({ disabled: true })
        }
      } else if (this.props.activeGameMode === Views.TRAIN_MODE) {
        this.playAudio(this.props.audioSrc)
      }
    } else {
      this.props.changeCategory(title);
    }
  }

  playAudio(audioSrc: string) {
    const audio = new Audio();
    audio.src = audioSrc;
    audio.currentTime = 0;
    audio.play();
  }

  render() {

    let flippedButton = <div></div>
    let languageTittle = this.props.title
    let displayNone = '';
    let cardModePlay = '';

    if (this.props.audioSrc) {
      flippedButton =
        <img className={`flipped-button ${this.state.isFlipped ||
          this.props.activeGameMode === 'play' ? 'display-none' : ''}`}
          onClick={() => {
            this.setState({ isFlipped: true })
          }}
          src={linkIcon.ROTATE}
        />
    }

    if (this.state.isFlipped && this.props.translation) {
      languageTittle = this.props.translation
    }

    if (this.props.activeGameMode === Views.PLAY_MODE && this.props.translation) {
      cardModePlay = 'card__image__play'
      displayNone = 'display-none';
    } else {
      displayNone = '';
      cardModePlay = '';
    }

    return (
      <div className=
        {`card-container ${this.state.isFlipped ? 'flipped' : ''} 
        ${this.state.disabled ? 'card__disable' : ''}`}

        onMouseLeave={(() => {
          if (this.state.isFlipped === true) {
            this.setState({ isFlipped: false })
          }
        })}
        onClick={() => this.clickCard(this.props.title)}>
        <div className="card">
          <img className={`${cardModePlay} card__image ${this.state.isFlipped ? 'card__image__flipped' : ''}`}
            src={this.props.imgSrc} />
          <hr className={`${displayNone} card__${this.props.activeGameMode === 'train' ? 'hr-train' : 'hr-play'}`} />
          <p className={`${displayNone} card__name ${this.state.isFlipped ? 'scale' : ''}`}>{languageTittle}</p>
          {flippedButton}
        </div>
      </div>
    )
  }

}