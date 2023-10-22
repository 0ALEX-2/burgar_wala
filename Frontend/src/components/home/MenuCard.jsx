import React from "react";
import { motion } from "framer-motion";

const MenuCard = ({ itemNum, burgerImage, price, title, delay = 0 }) => {
  return (
    <motion.div
      className="menuCard"
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: delay }}
    >
      <div>Item {itemNum}</div>
      <main>
        <img src={burgerImage} alt="Burger" />
        <h5>₹{price}</h5>
        <p>{title}</p>
        <button>Buy Now</button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
