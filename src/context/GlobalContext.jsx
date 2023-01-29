import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPizzaCount, setTotalPizzaCount] = useState(0);
  const [pizzasState, setPizzasState] = useState([]);

  const addPizza = (pizza) => {
    setTotal(total + pizza.price);
    setTotalPizzaCount(totalPizzaCount + 1);
    const pizzaIndex = pizzasState.findIndex((item) => item.id === pizza.id);
    let newPizzas = [...pizzasState];
    newPizzas[pizzaIndex] = {
      id: pizzasState[pizzaIndex].id,
      quantity: pizzasState[pizzaIndex].quantity + 1,
      unitaryTotal: pizzasState[pizzaIndex].unitaryTotal + pizza.price,
    };
    setPizzasState(newPizzas);
  };

  return (
    <GlobalContext.Provider
      value={{
        total,
        setTotal,
        totalPizzaCount,
        setTotalPizzaCount,
        setPizzasState,
        pizzasState,
        pizzas,
        setPizzas,
        addPizza
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
