import { Provider } from "react-redux";
import Counter from "./components/Counter";
import { CrudApi } from "./components/CrudApi";
import ShoppingCart from "./components/ShoppingCart";
import TeoriaRedux from "./components/TeoriaRedux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App-container" style={{ textAlign: "center" }}>
        <h1>Redux</h1>
        <hr />
        <CrudApi />
        <hr />
        <ShoppingCart />
        <hr />
        <Counter />
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default App;
