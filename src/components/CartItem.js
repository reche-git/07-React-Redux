const CartItem = ({ data, delOneFromCart, delAllFromCart, addToCart }) => {
  let { id, name, price, image, quantity } = data;

  return (
    <>
      <div className="Cart-Items">
        <div className="image-box">
          <img
            className="img"
            src={require(`../assets/products/${image}.png`)}
            alt="product"
            style={{ height: "60px" }}
          />
        </div>
        <div className="about">
          <h1 className="title">{name}</h1>
          <h3 className="subtitle">${price} per unit</h3>
        </div>
        <div className="counterCart">
          <div className="btn" onClick={() => delOneFromCart(id)}>
            -
          </div>
          <div className="countCart">{quantity}</div>
          <div className="btn" onClick={() => addToCart(id)}>
            +
          </div>
        </div>
        <div className="prices">
          <div className="amount">${price * quantity}.00</div>
          <div className="remove">
            <u onClick={() => delAllFromCart(id, true)}>Remove All</u>
          </div>
        </div>
      </div>
      <hr className="cartHr" />
    </>
  );
};

export default CartItem;
