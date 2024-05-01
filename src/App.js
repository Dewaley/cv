import React, { useEffect } from "react";
import { animations } from "./animation/animation";
import "./App.css";

function App() {
  useEffect(() => {
    animations();
  }, []);
  return (
    <>
      <header>
        <h1>31 reasons for 31</h1>
      </header>
      <div className="container">
        <div className="box">
          <p data-animation="fadeInDown">
            i <span>love</span> you because you are impossible to not love
          </p>
          <p data-animation="fadeInRight">
            i <span>love</span> you because you respect and value my opinions.
          </p>
          <p data-animation="fadeInLeft">
            i <span>love</span> you because of how strong our bond has stayed
            throughout the season of life
          </p>
          <p data-animation="fadeInRight">
            i <span>love</span> you because you always make time for me even we
            quarrel
          </p>
          <p data-animation="fadeInUp">
            i <span>love</span> you because you are beautiful
          </p>
        </div>

        <div className="box">
          <p data-animation="fadeInUp">
            i <span>love</span> you because you are kind
          </p>
          <p data-animation="fadeInDown">
            i <span>love</span> you because i’m never afraid to be myself around
            you
          </p>
          <p data-animation="fadeInRight">
            i <span>love</span> you because you are always available when i call
          </p>
          <p data-animation="fadeInDown">
            i <span>love</span> you because i need you. not in the ways to
            survive, but in the way that make life worth living
          </p>
          <p data-animation="fadeInLeft">
            i <span>love</span> you because you gave me the gift of you
          </p>
          <p data-animation="fadeInUp">
            i <span>love</span> you because of how ambitious you are{" "}
          </p>
        </div>

        <div className="box">
          <p data-animation="fadeInDown">
            i <span>love</span> you because of how vulnerable you are with me
          </p>
          <p data-animation="fadeInRight">
            i <span>love</span> you because you have taught me the true meaning
            of love and commitment
          </p>
          <p data-animation="fadeInUp">
            i <span>love</span> you because you are attentive to me
          </p>
          <p data-animation="fadeInLeft">
            i <span>love</span> you because you inspire me
          </p>
          <p data-animation="fadeInRight">
            i <span>love</span> you because you listen to me without judgements
          </p>
          <p data-animation="fadeInUp">
            i <span>love</span> you because you support me unconditionally
          </p>
          <p data-animation="fadeInLeft">
            i <span>love</span> you because you treat me like family
          </p>
        </div>

        <div className="box">
          <p data-animation="fadeInDown">
            i <span>love</span> you because you have become an essential part of
            my life’s journey
          </p>
          <p data-animation="fadeInDown">
            i <span>love</span> you because you are my constant source of
            encouragement
          </p>
          <p data-animation="fadeInRight">
            i <span>love</span> you because you are my constant source of
            encouragement
          </p>
          <p data-animation="fadeInUp">
            i <span>love</span> you because you make me laugh
          </p>
          <p data-animation="fadeInLeft">
            i <span>love</span> you because you are patient
          </p>
        </div>

        <div className="box">
          <p data-animation="fadeInLeft">
            i <span>love</span> you because you're the one I want to share my
            life with, through thick and thin.
          </p>
          <p data-animation="fadeInRight">
            i <span>love</span> you because you've taught me the importance of
            patience and understanding.
          </p>
          <p data-animation="fadeInUp">
            i <span>love</span> you because home is whenever I'm with you.
          </p>
          <p data-animation="fadeInRight">
            i <span>love</span> you because you make the ordinary extraordinary.
          </p>
          <p data-animation="fadeInDown">
            i <span>love</span> you because you're my anchor, grounding me when
            I feel adrift.
          </p>
        </div>

        <div className="box">
          <p data-animation="fadeInDown">
            i <span>love</span> you because you bring out the best in me.
          </p>
          <p data-animation="fadeInDown">
            i <span>love</span> you because you're my sounding board, always
            ready to listen
          </p>
          <p data-animation="fadeInRight">
            i <span>love</span> you because you make life's challenges easier to
            face.
          </p>
          <p data-animation="fadeInUp">
            you've shown me the meaning of true partnership.you make me laugh
          </p>
          <p data-animation="fadeInLeft">
            i <span>love</span> you because you make me feel like the luckiest
            person in the world.
          </p>
        </div>

        <div className="box">
          <p data-animation="fadeInUp">
            i <span>love</span> you because you've shown me the beauty of
            vulnerability and honesty.
          </p>
          <p data-animation="fadeInRight">
            i <span>love</span> you because you've brought so much light and
            warmth into my life
          </p>
          <p data-animation="fadeInLeft">
            i <span>love</span> you because you've given me the greatest gift of
            all: your love.
          </p>
          <p data-animation="fadeInRight">
            i <span>love</span> you because you make me feel complete in a way I
            never thought possible.
          </p>
          <p data-animation="fadeInUp">
            i <span>love</span> you becauseyou've filled my life with laughter,
            joy, and endless love.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
