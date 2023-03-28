const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
  let { id, name, price, quantity } = data;

  return (
    <div style={{borderBottom: "thin solid gray"}}>
      <h4>{name}</h4>
      <h5>${price}.00 x {quantity} = ${price*quantity}.00</h5>
      <button onClick={() => delOneFromCart(id)}>🗑️</button>
      <button onClick={() => delAllFromCart(id, true)}>🗑️ All</button>
    </div>
  );
};

export default CartItem;
