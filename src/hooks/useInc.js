import { useState } from "react";

export const useInc = ({ initial = 0, minValue = 0, maxValue = 100 }) => {
  const [value, setValue] = useState(initial);
  const inc = () => {
    setValue((prevState) =>
      prevState >= maxValue ? prevState : prevState + 1
    );
  };
  const dec = () => {
    setValue((prevState) =>
      prevState <= minValue ? prevState : prevState - 1
    );
  };

  const reset = () => setValue(initial);
  return [value, { inc, dec, reset }];
};
