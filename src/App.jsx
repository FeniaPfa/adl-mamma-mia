import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import { useGlobalContext } from "./context/GlobalContext";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";

function App() {
  const { data } = useFetch();

  const {setPizzas} = useGlobalContext()

  useEffect(() => setPizzas(data), [data]);

  return (
    
      <div className="App">
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
        </Routes>
      </div>
    
  );
}

export default App;
