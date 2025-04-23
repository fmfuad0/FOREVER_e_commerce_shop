import {Routes, Route} from "react-router-dom";
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
import {ToastContainer, toast} from "react-toastify";

function App() {

  return (
    <>
      <div className="App">
        <ToastContainer/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/collections" element={<Collection/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product/:productId" element={<Product/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/place-order" element={<PlaceOrder/>} />
          <Route path="/orders" element={<Orders/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
