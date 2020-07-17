import React from "react";
import { useScript } from "../hooks";

const Script = () => {
  const [isLoaded, isError] = useScript(
    "https://www.google.com/recaptcha/api.js"
  );
  console.log("isLoaded: ", isLoaded, ". isError: ", isError);
  return (
    <div>
      <h3>Script</h3>
      {isLoaded && <p>Script is loaded</p>}
    </div>
  );
};

export default Script;
