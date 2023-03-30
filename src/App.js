import { Provider } from "react-redux";
import Counter from "./components/Counter";
import { CrudApi } from "./components/CrudApi";
import Modal from "./components/Modal";
import ShoppingCart from "./components/ShoppingCart";
import TeoriaRedux from "./components/TeoriaRedux";
import { useModal } from "./hooks/useModal";
import store from "./store";

function App() {
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <>
      <Provider store={store}>
        <div className="App-container" style={{ textAlign: "center" }}>
          <button className="btnModal" onClick={openModal}>
            <h1>Redux</h1>
          </button>
          <hr />
          <CrudApi />
          <hr />
          <ShoppingCart />
          <hr />
          <Counter />
          <br />
          <br />
          <br />
          <br />
        </div>
      </Provider>

      {/* Modal */}
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="ExplinationModal">
          <h3>Wellcome to my Redux Project!</h3>
          <p>
            As an alternative to the Reducer API, Redux comes with a store that
            makes the use of state and actions more organized and it can be used
            in a more general way.
          </p>
          <p>Here you will find:</p>
          <ul>
            <li>
              The store that contains the state that is ejected by the
              "dispatch" action. You can find them{" "}
              <a
                href="https://github.com/reche-git/07-React-Redux/tree/master/src/store"
                rel="noreferrer"
                target="_blank"
              >
                here!
              </a>
            </li>
            <li>
              The actions that hold the logic behind the event. You can find
              them{" "}
              <a
                href="https://github.com/reche-git/07-React-Redux/tree/master/src/actions"
                rel="noreferrer"
                target="_blank"
              >
                here!
              </a>
            </li>
            <li>
              The type of action that contains the name that represents the
              logic. You can find them{" "}
              <a
                href="https://github.com/reche-git/07-React-Redux/tree/master/src/types"
                rel="noreferrer"
                target="_blank"
              >
                here!
              </a>
            </li>
            <li>
              The reducers! Functions that manage the actions. You can find them{" "}
              <a
                href="https://github.com/reche-git/07-React-Redux/tree/master/src/reducers"
                rel="noreferrer"
                target="_blank"
              >
                here!
              </a>
            </li>
          </ul>
          <p>
            As you can see, Redux allows a way to organize our application
            making the debug or maintaining of the code more easy and simple.
          </p>
        </div>
      </Modal>
      {/* Modal */}
    </>
  );
}

export default App;
