
import React, { useState } from 'react';
import './App.css';
import menuIcon from './images/list.svg';
import accountIcon from './images/Account.png';
import closeIcon from './images/x.svg';
import frame3 from './images/Frame 3.png';
import frame8 from './images/Frame 8.png';
import image6 from './images/image 6.png';
import image from './images/image.png';
import image12 from './images/image 12.png';
import frame24 from './images/Frame 24.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header>
        <nav id="navbar">
          <div className={`partie_1 ${menuOpen ? 'mobile-menu' : ''}`}>
            <a href="#" className="logo"><b>GlobalTalk</b></a>
            <ul>
              <li><a href="#" className="elmen">Main</a></li>
              <li><a href="#" className="elmen">Statistics</a></li>
              <li><a href="#" className="elmen">About</a></li>
              <li>
                <select className="games">
                  <option value="" className="games">Games</option>
                  <option value="" className="games">Sprint →</option>
                  <option value="" className="games">Audio-call →</option>
                </select>
              </li>
            </ul>
          </div>
          <img src={menuIcon} alt="menu" className="menu" onClick={toggleMenu} />
          <img src={accountIcon} alt="Account" className="Account" />
          <img src={closeIcon} alt="x" className="x" />
          <div className="partie_2">
            <ul className="li-right">
              <li><a href="#" className="login">Login →</a></li>
              <li><button className="btn"><b>Sign-up</b></button></li>
            </ul>
          </div>
        </nav>
      </header>
      <body>
        <div id="content" className={menuOpen ? 'hidden' : ''}>
          <ul className="sec1">
            <li>
              <h4 className="para1">E-COURSE PLATFORM</h4>
            </li>
            <li>
              <h1 className="para"><b>Learning and<br />teaching online,<br /> made easy.</b></h1>
            </li>
            <li>
              <p className="para2">Gain subject certification or earn money while teaching online with GlobalTalk.</p>
            </li>
          </ul>
          <ul id="btn2">
            <li className="li-right"><a href="#" className="signin"><b>Sign In →</b></a></li>
            <li className="li-right"><button className="bttn"><b>Learn more →</b></button></li>
          </ul>
        </div>
        <div id="frame" className={menuOpen ? 'hidden' : ''}>
          <span>
            <img src={frame3} alt="" />
            <p className="frame1">Hours of content</p>
          </span>
          <span>
            <img src={frame8} alt="" />
            <p className="frame1">Active Users</p>
          </span>
        </div>
        <div className={`imgm ${menuOpen ? 'hidden' : ''}`}>
          <img className="imag1" src={image6} alt="" />
          <img className="imag2" src={image} alt="" />
          <img className="imag3" src={image12} alt="" />
        </div>
        <div id="image" className={menuOpen ? 'hidden' : ''}>
          <img className="image-apres-responsive" src={frame24} alt="" />
        </div>
      </body>
    </div>
  );
}

export default App;
