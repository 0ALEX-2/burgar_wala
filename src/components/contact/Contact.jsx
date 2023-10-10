import React from "react";
import { motion } from "framer-motion";
import burger from "../../assets/burger1.webp";

const Contact = () => {
  return (
    <section className="contact">
      <motion.form
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
      >
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message.." id="" cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </motion.form>
      <motion.div
        className="formBorder"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          initial={{ y: "-100vh", x: "50%", opacity: 0 }}
          animate={{ y: "-50%", x: "50%", opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <img src={burger} alt="Burger" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
