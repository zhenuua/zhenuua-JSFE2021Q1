import React from "react";

import './GameOver.scss';

interface MyState {
}
interface MyProps {
  changeCategory: (page: string) => void,
}

export default class GameOver extends React.Component<MyProps, MyState> {
  
  playAudio(audioSrc: string) {
    const audio = new Audio();
    audio.src = audioSrc;
    audio.currentTime = 0;
    audio.play();
  }

  render(){

    let imageWinSrc = './img/success.jpg'
    let imageFailSrc = './img/failure.jpg'
    this.playAudio('audio/success.mp3');
    let goMainPage: ReturnType<typeof setTimeout>;
    goMainPage = setTimeout(()=>{
      this.props.changeCategory('MainPage');
    }, 3000);

    return (
      <section className='game-over__field'>
        <h1></h1>
        <img className='game-over__image' src={imageWinSrc} />
        {/* <img className={`${cardModePlay} card__image ${this.state.isFlipped ? 'card__image__flipped' : ''}`}
            src={this.props.imgSrc} /> */}
      </section>
    )
  }
}