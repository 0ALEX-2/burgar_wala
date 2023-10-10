import React from "react";

const CartItem = ({ value, title, img, inc, dec }) => {
  <div className="cartItem">
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
  return (
    <section className="cart">
      <main>
        <CartItem />
      </main>
    </section>
  );
};

export default Cart;
