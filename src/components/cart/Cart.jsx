import React from "react";
import burger from "../../assets/burger1.webp";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

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
        <CartItem
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
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{100}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 100}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
