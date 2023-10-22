const CartItem = ({ value, title, img, inc, dec }) => {
  return (
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
    </div>
  );
};

export default CartItem;
