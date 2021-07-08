import React from "react";

import './footer.scss';

export default class Footer extends React.Component {
 
  render(){
    return (
      <section className='footer-container'>
        <a className="github" href="https://github.com/zhenuua" target="_blank" rel="noopener noreferrer">github</a>
        {/* <p>2021 © English for Kids</p> */}
        <a className="rss" href="https://rs.school/js/" target="_blank" rel="noopener">
        <span className="rss-year">'21</span>
        </a>
      </section>
    )
  }
}