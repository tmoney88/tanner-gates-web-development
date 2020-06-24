import React, { useState } from "react";
import "../App.css";

function Home() {
  const [showHtml, setShowHtml] = useState(false);
  const [showCss, setShowCss] = useState(false);
  const [showSass, setShowSass] = useState(false);
  return (
    <div className="container">
      <div className="hero">
        <h1>Let's Build Something</h1>
      </div>
      <h2>Skills</h2>
      <div className="card-container container">
        <div
          className="card"
          onMouseEnter={() => setShowHtml(true)}
          onMouseLeave={() => setShowHtml(false)}
        >
          <h3>HTML</h3>
          {showHtml && <div>HTML-description</div>}
          {!showHtml && (
            <div>
              <i class="fab fa-html5"></i>
            </div>
          )}
        </div>
        <div
          className="card"
          onMouseEnter={() => setShowCss(true)}
          onMouseLeave={() => setShowCss(false)}
        >
          <h3>CSS</h3>
          {showCss && <div>CSS-Description</div>}
          {!showCss && (
            <div>
              <i class="fab fa-css3"></i>
            </div>
          )}
        </div>
        <div
          className="card"
          onMouseEnter={() => setShowSass(true)}
          onMouseLeave={() => setShowSass(false)}
        >
          <h3>SASS</h3>
          {showSass && <div>SASS - Description</div>}
          {!showSass && (
            <div>
              <i class="fab fa-sass"></i>
            </div>
          )}
        </div>
        <div className="card">
          <h3>JavaScript</h3>
          <div>
            <i class="fab fa-js"></i>
          </div>
        </div>
        <div className="card">
          <h3>React</h3>
          <div>
            <i class="fab fa-react"></i>
          </div>
        </div>
        <div className="card">
          <h3>Node</h3>
          <div>
            <i class="fab fa-node"></i>
          </div>
        </div>
        <div className="card">
          <h3>Python</h3>
          <div>
            <i class="fab fa-python"></i>
          </div>
        </div>
        <div className="card">
          <h3>Django</h3>
          <div>
            <i class="fab fa-python"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
