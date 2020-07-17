import React from "react";
import { useMount, useUnMount, useToggle } from "../hooks";

const Mount = () => {
  const { isToggled, toggle } = useToggle();
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isToggled && <UnMount />}
    </div>
  );
};

export const UnMount = () => {
  useMount(() => {
    console.log("I'm Mounted");
  });
  useUnMount(() => {
    console.log("I'm Unmounted");
  });
  return <div>This is unmount component</div>;
};

export default Mount;
