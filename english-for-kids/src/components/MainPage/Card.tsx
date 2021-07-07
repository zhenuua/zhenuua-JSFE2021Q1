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
}

export default class Card extends React.Component<MyProps, MyState> {
  state = { playMode: false }

  clickCard(title: string) {
    if (this.props.audioSrc) {
      this.playAudio(this.props.audioSrc)
      //this.state.play = false
      let flippedButton =
        <div className='flipped-button'>
          <img src='./img/rotate.svg' />
        </div>
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
    //let flippedClass = ''
    if (this.props.audioSrc) {
      flippedButton = <img className='flipped-button' onClick={() => {
        console.log('flipped');
      }} src='./img/rotate.svg' />
      // flippedClass = 'flipped'
    }

    return (
      <div className='card-container' onClick={() =>   //{`card-container  ${this.props.audioSrc ? 'flipped' : ''}`}
        this.clickCard(this.props.title)
      }>
        <div className="card">
          <img className='card__image' src={this.props.imgSrc} />
          <hr className={`card__${isTrain ? 'hr-train' : 'hr-play'}`} />
          <p className='card__name'>{this.props.title}</p>
          {flippedButton}
        </div>
      </div>
    )
  }


}