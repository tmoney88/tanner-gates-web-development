import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Let's Build Something</h1>
      </div>
      <h2>Skills</h2>
      <div className="card-container container">
        <div className="card">
          <h3>HTML</h3>
          <div>
            <i class="fab fa-html5"></i>
          </div>
        </div>
        <div className="card">
          <h3>CSS</h3>
          <div>
            <i class="fab fa-css3"></i>
          </div>
        </div>
        <div className="card">
          <h3>SASS</h3>
          <div>
            <i class="fab fa-sass"></i>
          </div>
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
