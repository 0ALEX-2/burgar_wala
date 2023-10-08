import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/sakil.jpg";

const Founder = () => {
  return (
    <section className="founder">
      <motion.div>
        <img src={me} alt="sakil" height={200} width={200} />
      </motion.div>
    </section>
  );
};

export default Founder;
