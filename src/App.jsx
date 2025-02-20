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
import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
  return (
    <>
    
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route element={<GuestGuard />}>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    </Route>
    <Route path="/cart" element={<Cart />} />
    <Route element={<AuthGuard />}>
    <Route path="/profile" element={<ProfilePage />} />
    </Route>
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/woman" element={<Woman />} />
    <Route path="/man" element={<Man />} />
    <Route path="/fitness" element={<Fitness />} />
    <Route path="/boxing" element={<Boxing />} />
    <Route path="/best-seller" element={<BestSeller />} />
    <Route path="/top-seller" element={<TopSeller />} />
    <Route path="/product/:name" element={<ProductDetails />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    </Routes>
    <Footer/>
    </>
  )
}
  export default App
