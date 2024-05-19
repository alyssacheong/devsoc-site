import { useState } from "react";
import "./App.css";
import bubbles from "./bubbles.png";
import bubbles2 from "./bubbles2.png";
import bubbles3 from "./bubbles3.png";
import bubbles4 from "./bubbles4.png";
import clouds from "./clouds.png";
import cloud2 from "./cloud2.png";
import cloud3 from "./cloud3.png"
import logo from "./logo.png";

function App() {
  const [text, setText] = useState(<span>click bubbles</span>);

  return (
    <div>
      <p className="initial-text">{text}</p>
      <div className="hobbies-bubble">
        <button
          className="bubble"
          onClick={() => {
            setText(
              <span>
                <div className="hobbies-container">
                  <h1 className="about-me-title">My hobbies</h1>
                  <p>
                    I've been a casual maimai player for about a year now (I
                    still suck though).
                  </p>
                  <p>
                    I also cycle through mobile/idle games because it keeps me
                    distracted on the long trek to UNSW. Notable games include:
                    Candy Crush, HookedInc, Camping Tycoon, Good Pizza Great
                    Pizza. Currently I am on level __ of wordscapes (i'll
                    probably get bored soon)
                  </p>
                  <p>
                    Recently, I've picked up crocheting. I can make flowers.
                  </p>
                  <p>
                    Also sometimes I bake things.
                  </p>
                </div>
              </span>
            );
          }}
        >
          <img src={bubbles2} className="bubble-image"></img>
        </button>
      </div>

      <div className="about-me-bubble">
        <button
          className="bubble"
          onClick={() => {
            setText(
              <span>
                <div className="about-me-container">
                  <h1 className="about-me-title">About me</h1>
                  <p>
                    Hi, I'm Alyssa - a first year compsci/engineering student.
                    When i'm not studying, i'm probably playing video games or
                    trying (and failing) to code random stuff (chronically
                    online).
                  </p>
                </div>
              </span>
            );
          }}
        >
          <img src={bubbles} className="bubble-image"></img>
        </button>
      </div>

      <div className="code-bubble">
        <button
          className="bubble"
          onClick={() => {
            setText(
              <span>
                <div className="code-container">
                <h1 className="about-me-title">Some Irrelevant Projects</h1>
                <p>I made this pizza game in p5js.</p>
                <p>Also this chicken</p>
                </div>
              </span>
            )
          }}
        ><img src={bubbles3} className="bubble-image"></img></button>
      </div>

      <div className="code-bubble">
        <button
          className="bubble"
          onClick={() => {
            setText(
              <span>
                <div className="code-container">
                <h1 className="about-me-title">Some Irrelevant Projects</h1>
                <p>I made this pizza game in p5js.</p>
                <p>Also this chicken</p>
                </div>
              </span>
            )
          }}
        ><img src={bubbles3} className="bubble-image"></img></button>
      </div>
      
      <div className="socials-bubble">
        <button
          className="bubble"
          onClick={() => {
            setText(
              <span>
                <div className="socials-container">
                <h1 className="about-me-title">Socials</h1>
                
                </div>
              </span>
            )
          }}
        ><img src={bubbles4} className="bubble-image"></img></button>
      </div>

      <img src={cloud2} className="cloud"></img>
      <img src={cloud3} className="cloud1"></img>
    </div>
  );
}

export default App;
