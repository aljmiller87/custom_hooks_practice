import { useEffect } from "react";

export const useMount = (func) => {
  useEffect(() => {
    func();
  }, [func]);
};
export const useUnMount = (func) => {
  useEffect(() => {
    return () => {
      func();
    };
  });
};
