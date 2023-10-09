import React from "react";
import { motion } from "framer-motion";
import burger from "../../assets/burger1.webp";

const Contact = () => {
  return (
    <section className="contact">
      <motion.form>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message.." id="" cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </motion.form>
      <motion.div className="formBorder">
        <motion.div>
          <img src={burger} alt="Burger" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
