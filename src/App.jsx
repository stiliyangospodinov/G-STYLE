import { Route, Routes } from "react-router-dom";
import Footer from "./components/Core/Footer";
import Header from "./components/Core/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Woman from "./components/Products/Woman/Woman";
import Man from "./components/Products/Man/Man";
import Fitness from "./components/Products/Fitness/Fitness";
import Boxing from "./components/Products/Boxing/Boxing";
import BestSeller from "./components/Products/BestSellers/BestSeller";
import TopSeller from "./components/Products/TopSeller/TopSeller";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <>
    
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/woman" element={<Woman />} />
    <Route path="/man" element={<Man />} />
    <Route path="/fitness" element={<Fitness />} />
    <Route path="/boxing" element={<Boxing />} />
    <Route path="/best-seller" element={<BestSeller />} />
    <Route path="/top-seller" element={<TopSeller />} />
    <Route path="/product/:name" element={<ProductDetails />} />
    </Routes>
    <Footer/>
    </>
  )
}
  export default App
