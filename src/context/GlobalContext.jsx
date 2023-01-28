import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [pizzaCount, setPizzaCount] = useState(0)

  return (
    <GlobalContext.Provider value={{ total, setTotal, pizzaCount, setPizzaCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
