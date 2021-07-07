import React from 'react';

interface MyProps {
  title: string,
  imgSrc: string,
  functionFromPerent: (page: string) => void,
  translation?: string,
  audioSrc?: string
}
interface MyState {
  playMode: boolean,
  isFlipped: boolean
}

export default class Card extends React.Component<MyProps, MyState> {

  state = { playMode: false, isFlipped: false }

  clickCard(title: string) {
    if (this.props.audioSrc) {
      this.playAudio(this.props.audioSrc)
    } else {
      this.props.functionFromPerent(title);
    }
  }

  playAudio(audioSrc: string) {
    const audio = new Audio();
    audio.src = audioSrc;
    audio.currentTime = 0;
    audio.play();
  }

  render() {
    const isTrain = true //TODO



    let flippedButton = <div></div>
    if (this.props.audioSrc) {
      flippedButton = <img className={`flipped-button ${this.state.isFlipped ? 'display-none' : ''}`} onClick={() => {

        this.setState({ isFlipped: true })

        console.log('flipped');
      }} src='./img/rotate.svg' />
    }

    let inglishTittle = this.props.title
    if (this.state.isFlipped && this.props.translation) {
      inglishTittle = this.props.translation
    }
    console.log(this.state.isFlipped);
    return (
      <div className={`card-container ${this.state.isFlipped ? 'flipped' : ''}`}
        onMouseLeave={(() => { this.setState({ isFlipped: false }) })}
        onClick={() => this.clickCard(this.props.title)}>
        <div className="card">
          <img className={`card__image ${this.state.isFlipped ? 'card__image__flipped' : ''}`} src={this.props.imgSrc} />
          <hr className={`card__${isTrain ? 'hr-train' : 'hr-play'}`} />
          <p className={`card__name ${this.state.isFlipped ? 'scale' : ''}`}>{inglishTittle}</p>
          {flippedButton}
        </div>
      </div>
    )
  }


}