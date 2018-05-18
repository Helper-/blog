import React, { Component } from "react";
import CountUp from 'react-countup';

import './Mario.css';

import coin from '../images/Coin.gif';
import bricks from '../images/Bricks.gif';
import singleCloud from '../images/CloudSingle.gif';
import doubleCould from '../images/CloudDouble.gif';
import tripleCloud from '../images/CloudTriple.gif';
import questionsBlock from '../images/QuestionBlock.gif';
import singleBush from '../images/BushSingle.gif';
import doubleBush from '../images/BushDouble.gif';



// <!-- The images used were downloaded from: http://www.videogamesprites.net/SuperMarioBros1/ -->

class Home extends Component {
  render() {
    return (
      <div className='mainGame'>

        <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
        <div className="sky">
          <div className="scorebar">
            <p>
              <span className="topline-mario">MARIO</span>
              <span className="topline-world">WORLD</span>
              <span className="topline-time">TIME</span>
              <span className="bottomline-score">135457</span>
              <span className="bottomline-coin"><img src={coin} height="40px" /> x 37</span>
              <span className="bottomline-world">1 - 1</span>
              <span className="bottomline-time"><CountUp start={0} end={999} duration={999} /></span>
            </p>
          </div>

          <img className="cloud" src={singleCloud} />
          <img className="cloud" src={doubleCould} />
          <img className="cloud" src={tripleCloud} />
        </div>
        <div className="ground">
          <div className="skyblocks">
            <img className="brick" src={bricks} height="70px;" />
            <img className="brick" src={questionsBlock} height="70px;" />
            <img className="brick" src={bricks} height="70px;" />
            <img className="brick" src={bricks} height="70px;" />
          </div>

          <img className="bush" src={singleBush} height="70px;" />
          <img className="bush" src={doubleBush} height="70px;" />
          <img className="bush" src={singleBush} height="70px;" />

          <div className="mario"></div>

        </div>
      </div>
    );
  }
}
 
export default Home;
