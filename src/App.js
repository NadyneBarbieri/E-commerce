import "./App.css";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import LoginSingnup from "./Pages/LoginSingnup";
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import woman_banner from './Components/Assets/banner_womans.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      <Routes>
          <Route path="/" element = {<Shop />}/>
          <Route path="/mens" element = {<ShopCategory banner={men_banner} category = "men" />} />
          <Route path="/womans" element = {<ShopCategory banner={woman_banner} category = "woman" />} />
          <Route path="/kids" element = {<ShopCategory banner={kid_banner} category = "kid" />} />
          <Route path="product" element = {<Product />}>
            <Route path=":productId" element = {<Product />} />
          </Route>
        <Route path="/cart" element = {<Cart />}/>
        <Route path="/login" element = {<LoginSingnup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
