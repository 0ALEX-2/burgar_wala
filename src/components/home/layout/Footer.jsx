import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger Wala</h2>
        <p>This is where you can test the best burger.</p>
        <br />
        <em>Quality is our first priority.</em>
        <strong>All right received @burgerwala</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="#">
          <AiFillYoutube />
        </a>
        <a href="#">
          <AiFillInstagram />
        </a>
        <a href="#">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
