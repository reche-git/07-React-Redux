import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/shoppingActions";
import { CartCheckout } from "./CartCheckout";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { products } = state.shopping;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <hr style={{width:"60%", color: "#fff"}}/>
      <h3>Products</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCart={() => dispatch(addToCart(product.id))}
          />
        ))}
      </article>
      <CartCheckout />
    </div>
  );
};

export default ShoppingCart;
