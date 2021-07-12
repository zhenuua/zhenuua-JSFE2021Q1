import React from "react";

import './GameOver.scss';

interface MyState {
}
interface MyProps {
  changeCategory: (page: string) => void,
  mistakes: number
}

export default class GameOver extends React.Component<MyProps, MyState> {
  
  playAudio(audioSrc: string) {
    const audio = new Audio();
    audio.src = audioSrc;
    audio.currentTime = 0;
    audio.play();
  }

  render(){
    const winnerMassage = 'You win!';
    const failMassage = 'You fail!';
    const imageWinSrc = './img/success.jpg';
    const imageFailSrc = './img/failure.jpg';
    const audioWinSrc = 'audio/success.mp3';
    const audioFailSrc = 'audio/failure.mp3';
    let massage = '';
    let imageGameOver = '';
    let soundGameOver = '';
    if (this.props.mistakes === 0){
      massage = winnerMassage;
      imageGameOver = imageWinSrc;
      soundGameOver = audioWinSrc;
    } else {
      massage = failMassage;
      imageGameOver = imageFailSrc;
      soundGameOver = audioFailSrc;
    }

    this.playAudio(soundGameOver);

    let goMainPage: ReturnType<typeof setTimeout>;
    goMainPage = setTimeout(()=>{
      this.props.changeCategory('MainPage');
    }, 4000);

    return (
      <section className='game-over__field'>
        <h1 className='game-over__text'>{massage}</h1>
        <h2 className={`${this.props.mistakes === 0 ? 'display-none' : 'game-over__text'}`}>
          You have: {this.props.mistakes} errors!
        </h2>
        <img className='game-over__image' src={imageGameOver} />
      </section>
    )
  }
}