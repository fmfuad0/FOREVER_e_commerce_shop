import {Routes, Route, useNavigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Collection from "./pages/Collection.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Orders from "./pages/Orders.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import {ToastContainer} from "react-toastify";
import {useContext} from "react";
import {ShopContext} from "./context/ShopContext.jsx";

function App() {
  const {isLoggedIn} = useContext(ShopContext);
  return (
    <>
      <div className="App">
        <ToastContainer/>
        <Navbar />
        <Routes>
          {}
          <Route path="/" element={!isLoggedIn? <Login/> : <Home/>} />
          <Route path="/collections" element={!isLoggedIn? <Login/> : <Collection/>} />
          <Route path="/about" element={!isLoggedIn? <Login/> : <About/>} />
          <Route path="/contact" element={!isLoggedIn? <Login/> : <Contact/>} />
          <Route path="/product/:productId" element={!isLoggedIn? <Login/> : <Product/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cart" element={!isLoggedIn? <Login/> : <Cart/>} />
          <Route path="/place-order" element={!isLoggedIn? <Login/> : <PlaceOrder/>} />
          <Route path="/orders" element={!isLoggedIn? <Login/> : <Orders/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
