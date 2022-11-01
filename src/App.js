import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { intcrement, decment,incrementByAmout } from "./features/counter/counterSlice";

function App() {
  const [value, setValue] = useState(0);

  const count = useSelector((state) => {
    return state.counter.value;
  });

  const dispatch = useDispatch();

  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch(intcrement());
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(decment());
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmout(Number(value)));
        }}
      >
        自訂
      </button>
    </>
  );
}

export default App;
