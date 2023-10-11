import React from "react";
import burger from "../../assets/burger1.webp";

const CartItem = ({ value, title, img, inc, dec }) => {
  <div className="cartItem">
    {console.log(title, "title")}
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={dec}>-</button>
      <input type="number" value={value} readOnly />
      <button onClick={inc}>+</button>
      {/* 1.46 */}
    </div>
  </div>;
};

const Cart = () => {
  const increment = (item) => {};
  const decrement = (item) => {};
  return (
    <section className="cart">
      <main>
        <CartItem
          title="Cheese Burger"
          img={burger}
          value={0}
          inc={() => increment(1)}
          dec={() => decrement(1)}
        />
        {/* <CartItem
          title={"Veg Cheese Burger"}
          img={burger}
          value={0}
          inc={() => increment(2)}
          dec={() => decrement(2)}
        />
        <CartItem
          title={"Cheese Burger with French Fries"}
          img={burger}
          value={0}
          inc={() => increment(3)}
          dec={() => decrement(3)}
        /> */}
      </main>
    </section>
  );
};

export default Cart;
