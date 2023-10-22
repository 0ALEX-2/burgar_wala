import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/sakil.jpg";

const Founder = () => {
    const animate = {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
    };
    return (
      <section className="founder">
        <motion.div {...animate}>
          <img src={me} alt="sakil" height={200} width={200} />
          <h3>MD Sakil Ahmed</h3>
          <p>
            Hey, Everyone I am MD Sakil Ahmed, the founder of Burgar Wala.
            <br />
            We made the most tasty burger in the country.
          </p>
        </motion.div>
      </section>
    );
};

export default Founder;
