import React from "react";
import arrow from "./arrow.svg";
import photo from "./photo5.png";
import maria from "./maria.png";
import myarrow from './myarrow.png';
import m from './m.png';
import inst from './inst.jpeg';
import vk from './vk.jpeg';
import mail from './mail.jpeg'
import text from './textme.jpeg'


class Hero extends React.Component {
  render() {
    return (
      <div className="section hero-section" id='hero'>
        <a href="#hero"><img className="m" src={m}/></a>
        <a href="mailto:savannawriter@gmail.com"><img className="textme" src={text}/></a>
        <div className="contacts">
          <a href="https://www.instagram.com/iwishihadnoname"><img className="icon" src={inst} /></a>
          <a href="https://vk.com/id378914381"><img className="icon" src={vk} /></a>
          <a href="mailto:savannawriter@gmail.com"><img className="icon" src={mail} /></a>
        </div>
        <div className="text">
          <div className="wrapper">
            <div className="h-wrapper">
              <div className="hello">hello, it's me,</div>
              <img className="maria" src={maria}/>
              <div className="hello">.</div>
            </div>
            <div className="whoiam">
              and that's who i think i am<span className="dot whoiam">:</span>
            </div>
          </div>
          <div className="items wrapper">
            <a className="item dev" href="#dev">
              web-developer
            </a>
            <a className="item designer" href="#designer">
              ui-ux designer
            </a>
            <a className="item webflow" href="#webflow">
              junior webflow developer
            </a>
          </div>
          <div className="scroll-wrapper">
            <a className="scroll-button" href="#dev">
              scroll for more
            </a>
            <img src={myarrow} className="arrow" />
          </div>
        </div>
        <img className="photo" src={photo} />
      </div>
    );
  }
}

export default Hero;
