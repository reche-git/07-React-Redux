import CartItem from "./CartItem";

export const CartCheckout = ({
  data,
  state,
  delFromCart,
  addToCart,
  clearCart,
}) => {
  const { quantity } = data;
  const { total, cart } = state;
  // console.log(total);

  return (
    <div className="bodyContainer">
      <div className="CartContainer">
        <div className="HeaderCart">
          <h3 className="HeadingCart">Shopping Cart</h3>
          <h5 className="Action" onClick={clearCart}>
            Clear Cart 🗑️
          </h5>
        </div>

        <article className="box">
          {cart.map((item, index) => (
            <CartItem
              key={index}
              data={item}
              delFromCart={delFromCart}
              addToCart={addToCart}
            />
          ))}
          <br />
        </article>
        <div className="checkout">
          <div className="total">
            <div>
              <div className="Subtotal">Sub-Total</div>
              <div className="items">{quantity} Items</div>
            </div>
            {/* PASS QUANTITY AND PRICE FROM CARTITEM TO HERE WITH A STATE CONST */}
            <div className="total-amount">${total}</div>
          </div>
          <button className="button">Checkout</button>
        </div>
      </div>
    </div>
  );
};
