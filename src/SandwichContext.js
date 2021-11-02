const { createContext, useState, useContext } = require("react");

const SandwichContext = createContext();

export const SandwichProvider = ({ children }) => {
  const [sandwich, setSandwich] = useState();

  return (
    <SandwichContext.Provider value={{ sandwich, setSandwich }}>
      {children}
    </SandwichContext.Provider>
  );
};

export const useSandwich = () => useContext(SandwichContext)
