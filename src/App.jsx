import { Route, Routes } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";

import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import NotFound from "./pages/NotFound";
import { useGlobalContext } from "./context/GlobalContext";
import { useEffect } from "react";
import Loading from "./components/Loading";

function App() {
    const { pizzas, loading } = useFetch("/pizzas.json");
    const { setCurrentPizzas } = useGlobalContext();
    
    const initialPizzas = pizzas.map((item) => ({
        id: item.id,
        quantity: 0,
        unitaryTotal: 0,
    }));
    
    useEffect(() => {
        setCurrentPizzas(initialPizzas);
    }, [pizzas]);

    if (loading) return <Loading />;

    return (
        <>
            <Navbar />

            <Routes>
                <Route
                    path="/"
                    element={<Home pizzas={pizzas} />}
                />
                <Route
                    path="/carrito"
                    element={<Cart />}
                />
                <Route
                    path="/pizza/:id"
                    element={<Pizza />}
                />
                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </>
    );
}

export default App;
