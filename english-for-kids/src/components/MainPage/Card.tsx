import React from 'react';

interface MyProps {
  title: string,
  imgSrc: string,
  functionFromPerent: (page: string)=>void
}
interface MyState {

}


export default class Card extends React.Component<MyProps, MyState> {


  
  render(){
    const isTrain = true //TODO
//onClick={this.props.changeCategory}
    return (
      <div className="card-container" onClick={()=>this.props.functionFromPerent(this.props.title)} >
        <div className="card">
          <img className='card__image' src={this.props.imgSrc} />  
          <hr className={`card__${isTrain ? 'hr-train' : 'hr-play'}`}/>
          <p className='card__name'>{this.props.title}</p>
        </div>
      </div>
    )
  }
}