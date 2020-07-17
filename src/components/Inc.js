import React from "react";
import { useInc } from "../hooks";

const Inc = () => {
  const [volume, { inc, dec, reset }] = useInc({ maxValue: 10, initial: 3 });
  return (
    <div>
      <button onClick={dec}>-</button>
      {volume}
      <button onClick={inc}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Inc;
