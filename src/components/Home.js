import React, { useState } from "react";
import "../App.css";

function Home() {
  const [showHtml, setShowHtml] = useState(false);
  const [showCss, setShowCss] = useState(false);
  const [showSass, setShowSass] = useState(false);
  const [showJs, setShowJs] = useState(false);
  const [showReact, setShowReact] = useState(false);
  const [showNode, setShowNode] = useState(false);
  const [showPython, setShowPython] = useState(false);
  const [showDjango, setShowDjango] = useState(false);
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
        <div
          className="card"
          onMouseEnter={() => setShowJs(true)}
          onMouseLeave={() => setShowJs(false)}
        >
          <h3>JavaScript</h3>
          {showJs && <div>Javascript - Description</div>}
          {!showJs && (
            <div>
              <i class="fab fa-js"></i>
            </div>
          )}
        </div>
        <div
          className="card"
          onMouseEnter={() => setShowReact(true)}
          onMouseLeave={() => setShowReact(false)}
        >
          <h3>React</h3>
          {showReact && <div>React - Description</div>}
          {!showReact && (
            <div>
              <i class="fab fa-react"></i>
            </div>
          )}
        </div>
        <div
          className="card"
          onMouseEnter={() => setShowNode(true)}
          onMouseLeave={() => setShowNode(false)}
        >
          <h3>Node</h3>
          {showNode && <div>Node - Description</div>}

          {!showNode && (
            <div>
              <i class="fab fa-node"></i>
            </div>
          )}
        </div>
        <div
          className="card"
          onMouseEnter={() => setShowPython(true)}
          onMouseLeave={() => setShowPython(false)}
        >
          <h3>Python</h3>
          {!showPython && (
            <div>
              <i class="fab fa-python"></i>
            </div>
          )}
          {showPython && <div>Python - Description</div>}
        </div>
        <div
          className="card"
          onMouseEnter={() => setShowDjango(true)}
          onMouseLeave={() => setShowDjango(false)}
        >
          <h3>Django</h3>
          {!showDjango && (
            <div>
              <i class="fab fa-python"></i>
            </div>
          )}
          {showDjango && <div>Django - Description</div>}
        </div>
      </div>
    </div>
  );
}

export default Home;
