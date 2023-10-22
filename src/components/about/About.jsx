import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import founder from "../../assets/sakil.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>MBA Burger Wala</h4>
          <p>To test the best,You are welcome.</p>
          <p>Explore Burgers. Click below to see the menu</p>
          <Link to={"/"}>
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={founder} alt="Founder" />
              <h3>MD Shakil Ahmed</h3>
            </div>
            <p>I am MD Shakil Ahmed, the founder of Burger Wala.</p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
