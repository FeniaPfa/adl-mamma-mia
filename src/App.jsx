import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Pizza from "./pages/Pizza"


function App() {


  return (
    <div className="App">
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
      </Routes>
    </div>
  )
}

export default App
