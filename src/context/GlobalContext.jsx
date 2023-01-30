import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [total, setTotal] = useState(0);
    const [totalPizzaCount, setTotalPizzaCount] = useState(0);
    const [currentPizzas, setCurrentPizzas] = useState([]);

    const formatNumber = (number) => {
        return new Intl.NumberFormat("en-US", { currency: "USD" })
            .format(number)
            .replace(",", ".");
    };

    const addPizza = (pizza) => {
        setTotal(total + pizza.price);
        setTotalPizzaCount(totalPizzaCount + 1);
        const pizzaIndex = currentPizzas.findIndex(
            (item) => item.id === pizza.id
        );
        let newPizzas = [...currentPizzas];
        newPizzas[pizzaIndex] = {
            id: currentPizzas[pizzaIndex].id,
            quantity: currentPizzas[pizzaIndex].quantity + 1,
            unitaryTotal: currentPizzas[pizzaIndex].unitaryTotal + pizza.price,
        };
        setCurrentPizzas(newPizzas);
    };

    const removePizza = (pizza) => {
        const pizzaIndex = currentPizzas.findIndex(
            (item) => item.id === pizza.id
        );
        let newPizzas = [...currentPizzas];
        if (total === 0 || currentPizzas[pizzaIndex].quantity === 0) return;
        setTotal(total - pizza.price);
        setTotalPizzaCount(totalPizzaCount - 1);
        newPizzas[pizzaIndex] = {
            id: currentPizzas[pizzaIndex].id,
            quantity: currentPizzas[pizzaIndex].quantity - 1,
            unitaryTotal: currentPizzas[pizzaIndex].unitaryTotal - pizza.price,
        };
        setCurrentPizzas(newPizzas);
    };

    return (
        <GlobalContext.Provider
            value={{
                formatNumber,
                total,
                setTotal,
                totalPizzaCount,
                setTotalPizzaCount,
                setCurrentPizzas,
                currentPizzas,
                pizzas,
                setPizzas,
                addPizza,
                removePizza,
                setLoading,
                loading,
                error,
                setError,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
