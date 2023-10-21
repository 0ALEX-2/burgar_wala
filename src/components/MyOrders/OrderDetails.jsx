import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"sjda 12-32ss dsad"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Shakil Ahmed"}
          </p>
          <p>
            <b>Phone</b>
            {"8907623415"}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"21-10-2023"}
          </p>
          <p>
            <b>Delivered At</b>
            {"25-10-2023"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference</b>#{"djhgjhcgd"}
          </p>
          <p>
            <b>Paid At</b>
            {"25-10-2023"}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹{56768}
          </p>
          <p>
            <b>Shipping Charges</b>₹{100}
          </p>
          <p>
            <b>Tax</b>₹{215}
          </p>
          <p>
            <b>Total Amount</b>₹{56768 + 100 + 215}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> X <span>{213}</span>
            </div>
          </div>
          <div>
            <h4>Veg Burger</h4>
            <div>
              <span>{10}</span> X <span>{500}</span>
            </div>
          </div>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> X <span>{213}</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
            <div style={{ fontWeight: 800 }}>₹{1234}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
