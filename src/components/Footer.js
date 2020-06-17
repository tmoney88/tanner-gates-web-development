import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container footer-flex">
        <p>Tanner Gates Web Development &copy; 2020</p>
        <ul>
          <li>
            <a
              href="https://github.com/tmoney88"
              target="_blank"
              className="fab fa-github"
            >
              &nbsp;Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tanner-gates-08493a160/"
              target="_blank"
              className="fab fa-linkedin"
            >
              &nbsp;LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
