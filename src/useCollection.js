import { useState } from "react";

export const useCollection = (defaultState) => {
  const [state, setState] = useState(defaultState || []);

  const addItem = (itemToAdd) => {
    setState((state) => [...state, itemToAdd]);
  };

  const removeItem = (itemToRemove) => {
    setState((state) => state.filter((item) => item !== itemToRemove));
  };

  return [state, addItem, removeItem];
};
