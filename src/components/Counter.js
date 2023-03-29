import { useDispatch, useSelector } from "react-redux";
import {
  add,
  add5,
  reset,
  subtract,
  subtract5,
} from "../actions/counterActions";

const Counter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter Redux</h2>
      <div className="counter-container">
        <div className="counter purple">
          <div className="counter-icon"></div>
          <div className="counter-content">
            <h3>Let's count!</h3>
            <nav className="keys">
              <button
                onClick={() => dispatch(subtract5())}
                className="key__button"
              >
                -5
              </button>
              <button
                onClick={() => dispatch(subtract())}
                className="key__button"
              >
                -
              </button>
              <button onClick={() => dispatch(reset())} className="key__button">
                0
              </button>
              <button onClick={() => dispatch(add())} className="key__button">
                +
              </button>
              <button onClick={() => dispatch(add5())} className="key__button">
                +5
              </button>
            </nav>
            <h3 className="counter-value">{state.counter}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
