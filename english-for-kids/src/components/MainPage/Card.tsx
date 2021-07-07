import React from 'react';

interface MyProps {
  title: string,
  imgSrc: string,
  functionFromPerent: (page: string) => void,
  translation?: string,
  audioSrc?: string
}
interface MyState {
  play: boolean,
}

export default class Card extends React.Component<MyProps, MyState> {

  clickCard(title: string){
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
  // functionFromPerent={(page:string)=>{this.menuItemsHandler(page)}}
  // functionFromPerent={(page:string)=>{
  //   this.props.functionFromPerent(page);
  //   this.openCloseMenu();
  //   }} 
  render() {
    const isTrain = true //TODO
    //onClick={this.props.changeCategory}
    const flippedButton = <div></div>
    if (this.props.audioSrc) { 
      const flippedButton = 
      <img className='flipped-button' src='./img/rotate.svg' />
    }

      return (
        <div className="card-container" onClick={()=>
          this.clickCard(this.props.title)
          }>
          <div className="card">
            <img className='card__image' src={this.props.imgSrc} />
            <hr className={`card__${isTrain ? 'hr-train' : 'hr-play'}`} />
            <p className='card__name'>{this.props.title}</p>
            

          </div>
        </div>
      )
    }

  
}