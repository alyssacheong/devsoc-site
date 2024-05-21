import { useState } from "react";
//import * as React from 'react';
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

import "./App.css";
import bubbles from "./bubbles.png";
import bubbles2 from "./bubbles2.png";
import bubbles3 from "./bubbles3.png";
import bubbles4 from "./bubbles4.png";
import clouds from "./clouds.png";
import cloud2 from "./cloud2.png";
import cloud3 from "./cloud3.png";
import cloud4 from "./cloud4.png";
import cloud5 from "./cloud5.png";
//import logo from "./logo.png";
import arrow from "./arrow.png";
import arrow1 from "./arrow1.png";
import arrow2 from "./arrow2.png";
import arrow3 from "./arrow3.png";
import arrow4 from "./arrow4.png";
import me from "./me.png";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

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
                  <p className="hobbies-text">
                    I've been a casual maimai player for about a year now (I
                    still suck though).
                  </p>
                  <a
                    className="maimai-image"
                  >
                    <img
                      src="https://i.postimg.cc/XpYxs5t9/718-C2-CCD-31-A4-404-C-BD73-988-E358506-C7.jpg"
                      alt="718-C2-CCD-31-A4-404-C-BD73-988-E358506-C7"
                    />
                  </a>
                 

                  <p className="hobbies-text">
                    I also cycle through mobile/idle games because it keeps me
                    distracted on the long trek to UNSW (including but not limited to: 
                    Candy Crush, HookedInc, Camping Tycoon, Good Pizza Great
                    Pizza). Currently I am on level 1305 of wordscapes (i'll
                    probably get bored soon)
                  </p>
                  <a
                    className="wordscapes-image"
                    
                  >
                    <img
                      src="https://i.postimg.cc/B8HCjB1f/IMG-4776.png"
                      alt="IMG-4776"
                    />
                  </a>
                  
                  <p className="hobbies-text">
                    + crochet. (i can only make flowers)
                  </p>

                  <a className="crochet-image">
                    <img
                      src="https://i.postimg.cc/dh76YYs1/IMG-6362-1.jpg"
                      alt="IMG-6362-1"
                    />
                  </a>
                 
                  <p className="hobbies-text">+ baking.</p>
                  <a
                    className="baking-image"
                    
                  >
                    <img
                      src="https://i.postimg.cc/WhY8C3PC/IMG-6812.jpg"
                      alt="IMG-6812"
                    />
                  </a>
                </div>
                <div className="random-text">
                  <p>(this is an old image)</p>

                </div>
                
                <img src={arrow1} className="arrow2"></img>
                <img src={arrow2} className="arrow3"></img>
                <img src={arrow3} className="arrow4"></img>
                <img src={arrow4} className="arrow5"></img>
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
                  <img src={arrow} className="arrow1"></img>
                  <img src={me} className="me"></img>
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
                  
                  <iframe className="pizza" src="https://editor.p5js.org/Toasterf1sh/full/VdTBlwmod"></iframe>
                  <div className="pizza-text2">
                  <ul>
                    <li>Click the pizza to start</li>
                    <li>Use the mouse to put ingredients on the pizza</li>
                  </ul>

                  </div>
                  
                  <div className="pizza-text">
                  <ul>
                    <li>press a - toggle pepperoni</li>
                    <li>press s - toggle ham</li>
                    <li>press d - toggle mushroom</li>
                    <li>press f - toggle pineapple</li>
                    <li>(there's no cheese yet i'm sorry)</li>
                  </ul>
                  </div>
                  
                </div>
              </span>
            );
          }}
        >
          <img src={bubbles3} className="bubble-image"></img>
        </button>
      </div>

      <div className="socials-bubble">
        <button
          className="bubble"
          onClick={() => {
            setText(
              <span>
                <div className="socials-container">
                  <h1 className="about-me-title">Socials</h1>
                  <p className="links-text">some links!</p>
                  <ul className="center-list">
                    <li data-tooltip="linkedin">
                      <LightTooltip
                        title="LinkedIn"
                        slotProps={{
                          popper: {
                            modifiers: [
                              {
                                name: "offset",
                                options: {
                                  offset: [0, -35],
                                },
                              },
                            ],
                          },
                        }}
                      >
                        <Button>
                          <a
                            href="https://www.linkedin.com/in/alyssa-cheong-051405225/"
                            target="_blank"
                          >
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </Button>
                      </LightTooltip>
                    </li>
                    <li data-tooltip="github">
                      <LightTooltip
                        title="Github"
                        slotProps={{
                          popper: {
                            modifiers: [
                              {
                                name: "offset",
                                options: {
                                  offset: [0, -35],
                                },
                              },
                            ],
                          },
                        }}
                      >
                        <Button>
                          <a
                            href="https://github.com/alyssacheong"
                            target="_blank"
                          >
                            <i className="fa-brands fa-github"></i>
                          </a>
                        </Button>
                      </LightTooltip>
                    </li>
                  </ul>
                </div>
              </span>
            );
          }}
        >
          <img src={bubbles4} className="bubble-image"></img>
        </button>
      </div>

      <div className="fake-bubble">
        <button
          className="bubble"
          onClick={() => {
            setText(
              <span>
               <div>this bubble does nothing</div>
              </span>
            );
          }}
        >
          <img src={bubbles2} className="bubble-image"></img>
        </button>
      </div>

      <img src={cloud2} className="cloud"></img>
      <img src={cloud3} className="cloud1"></img>
      <img src={clouds} className="clouds"></img>
      <img src={cloud4} className="cloud4"></img>
      <img src={cloud5} className="cloud5"></img>

    </div>
  );
}

export default App;
