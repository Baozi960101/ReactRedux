import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  zero,
  increment,
  decment,
  incrementByAmout,
  customizeNumber,
} from "./features/counter/counterSlice";
import styled from "styled-components"


const Block = styled.div`
  width:200px;
  height:50px;
  margin:20px auto;
  background-color:green;
  color:white;
`


function App() {
  const [value, setValue] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const number = useSelector((state) => state.counter.history);
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
          dispatch(increment());
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
      <button
        onClick={() => {
          dispatch(customizeNumber(Number(value)));
        }}
      >
        測試
      </button>
      <button
        onClick={() => {
          dispatch(zero());
        }}
      >
        歸零
      </button>
      {number.map((data)=>{
        return <Block>{data}</Block>
      })}
    </>
  );
}

export default App;
