import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.webp";

const Menu = () => {
  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          title={"Cheese Burger"}
          itemNum={1}
          burgerImage={burger1}
          price={200}
          delay={0.1}
        />
        <MenuCard
          title={"Veg Cheese Burger"}
          itemNum={3}
          burgerImage={burger1}
          price={200}
          delay={0.3}
        />
        <MenuCard
          title={"Non-veg Cheese Burger"}
          itemNum={2}
          burgerImage={burger1}
          price={200}
          delay={0.5}
        />
      </div>
    </section>
  );
};

export default Menu;
