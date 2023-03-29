import { useDispatch, useSelector } from "react-redux";
import { addToCart, delFromCart, clearCart } from "../actions/shoppingActions";
import CartItem from "./CartItem";

export const CartCheckout = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { cart, total } = state.shopping;

//   console.log(cart);

  return (
    <div className="bodyContainer">
      <div className="CartContainer">
        <div className="HeaderCart">
          <h3 className="HeadingCart">Shopping Cart</h3>
          <h5 className="Action" onClick={() => dispatch(clearCart())}>
            Clear Cart 🗑️
          </h5>
        </div>

        <article className="box">
          {cart.map((item, index) => (
            <CartItem
              key={index}
              data={item}
              delOneFromCart={() => dispatch(delFromCart(item.id))}
              delAllFromCart={() => dispatch(delFromCart(item.id, true))}
              addToCart={() => dispatch(addToCart(item.id))}
            />
          ))}
          <br />
        </article>
        <div className="checkout">
          <div className="total">
            <div>
              <div className="Subtotal">Sub-Total</div>
            </div>
            {/* PASS QUANTITY AND PRICE FROM CARTITEM TO HERE WITH A STATE CONST */}
            <div className="total-amount">${total}</div>
          </div>
          <button className="buttonShopping">Checkout</button>
        </div>
      </div>
    </div>
  );
};
