const ProductItem = ({ data, addToCart }) => {
  let { id, name, price, image } = data;

  return (
    <div className="cardBody">
      <div className="imgBox">
        <img
          className="img"
          src={require(`../assets/products/${image}.png`)}
          alt="product"
        />
      </div>
      <div className="contentBox">
        <h3>{name}</h3>
        <h2 className="price">${price}.00</h2>
        <button className="buy" onClick={() => addToCart(id)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
