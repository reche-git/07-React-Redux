import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/shoppingActions";
import { CartCheckout } from "./CartCheckout";
import ProductItem from "./ProductItem";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";

const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [isOpen, openModal, closeModal] = useModal(false);

  const { products } = state.shopping;

  return (
    <>
      <div>
        <button className="btnModal" onClick={openModal}>
          <h2>Shopping Cart</h2>
        </button>
        <hr style={{ width: "60%", color: "#fff" }} />
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
      {/* Modal */}
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="ExplinationModal">
          <h3>Shopping Cart Redux Project!</h3>
          <p>
            Hope you enjoy interacting with my semi functional shopping project!
          </p>
          <p style={{ textAlign: "initial" }}>
            Feel free to take a look to the code in the{" "}
            <a
              href="https://github.com/reche-git/07-React-Redux"
              rel="noreferrer"
              target="_blank"
            >
              GitHub repository!
            </a>
          </p>
          <p style={{ textAlign: "initial" }}>
            The checkout is going to be develope in a future e-commerce project!
            If you come from the future, it could be already in my GitHub!
          </p>
        </div>
      </Modal>
      {/* Modal */}
    </>
  );
};

export default ShoppingCart;
