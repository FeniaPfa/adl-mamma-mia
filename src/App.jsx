import { Route, Routes } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";

import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import NotFound from "./pages/NotFound";

function App() {
    useFetch();

    return (
        <>
            <Navbar />

            <Routes>
                <Route
                    path="/"
                    element={<Home />}
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
