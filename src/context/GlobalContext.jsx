import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPizzaCount, setTotalPizzaCount] = useState(0);
  const [currentPizzas, setCurrentPizzas] = useState([]);

  const addPizza = (pizza) => {
    setTotal(total + pizza.price);
    setTotalPizzaCount(totalPizzaCount + 1);
    const pizzaIndex = currentPizzas.findIndex((item) => item.id === pizza.id);
    let newPizzas = [...currentPizzas];
    newPizzas[pizzaIndex] = {
      id: currentPizzas[pizzaIndex].id,
      quantity: currentPizzas[pizzaIndex].quantity + 1,
      unitaryTotal: currentPizzas[pizzaIndex].unitaryTotal + pizza.price,
    };
    setCurrentPizzas(newPizzas);
  };

  const substractPizza = (pizza) => {
    const pizzaIndex = currentPizzas.findIndex((item) => item.id === pizza.id);
    let newPizzas = [...currentPizzas];
    if(total === 0 || currentPizzas[pizzaIndex].quantity === 0) return
    setTotal(total - pizza.price);
    setTotalPizzaCount(totalPizzaCount - 1);
    newPizzas[pizzaIndex] = {
      id: currentPizzas[pizzaIndex].id,
      quantity: currentPizzas[pizzaIndex].quantity - 1,
      unitaryTotal: currentPizzas[pizzaIndex].unitaryTotal - pizza.price,
    };
    setCurrentPizzas(newPizzas);
  }

  return (
    <GlobalContext.Provider
      value={{
        total,
        setTotal,
        totalPizzaCount,
        setTotalPizzaCount,
        setCurrentPizzas,
        currentPizzas,
        pizzas,
        setPizzas,
        addPizza,
        substractPizza
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
