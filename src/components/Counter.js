import { useDispatch, useSelector } from "react-redux";
import { add, add5, reset, subtract, subtract5 } from "../actions/counterActions";

const Counter = () => {
const state = useSelector(state => state);
const dispatch = useDispatch()

  return (
    <div>
      <h2>Counter Redux</h2>
      <nav>
        <button onClick={() => dispatch(subtract5())}>-5</button>
        <button onClick={() => dispatch(subtract())}>-1</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(add())}>+1</button>
        <button onClick={() => dispatch(add5())}>+5</button>
      </nav>
      <h3>{state.counter}</h3>
    </div>
  );
};

export default Counter;

