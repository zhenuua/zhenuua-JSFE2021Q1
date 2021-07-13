import React from "react";
import { Views, linkAudio, linkIcon } from '../../assets/constants';

import './GameOver.scss';

const WINNER_MASSAGE = 'You win!';
const FAIL_MASSAGE = 'You fail!';
const SHOW_TIME = 5000;

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

    let massage = '';
    let imageSrcGameOver = '';
    let soundSrcGameOver = '';

    if (this.props.mistakes === 0){
      massage = WINNER_MASSAGE;
      imageSrcGameOver = linkIcon.SUCCESS;
      soundSrcGameOver = linkAudio.WIN;
    } else {
      massage = FAIL_MASSAGE;
      imageSrcGameOver = linkIcon.FAILURE;
      soundSrcGameOver = linkAudio.FAIL;
    }

    this.playAudio(soundSrcGameOver);

    let goMainPage: ReturnType<typeof setTimeout>;
    goMainPage = setTimeout(()=>{
      this.props.changeCategory(Views.MAIN);
    }, SHOW_TIME);

    return (
      <section className='game-over__field'>
        <h1 className='game-over__text'>{massage}</h1>
        <h2 className={`${this.props.mistakes === 0 ? 'display-none' : 'game-over__text'}`}>
          You have: {this.props.mistakes} errors!
        </h2>
        <img className='game-over__image' src={imageSrcGameOver} />
      </section>
    )
  }
}