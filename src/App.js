import "./App.css";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Sliders from "./components/Dashboard/Sliders";
import Footer from "./components/Dashboard/Footer";
import Category from "./components/Dashboard/Category";
import Home from "./page/Home.js";
import LoginPage from "./page/LoginPage.js";
import RegisterPage from "./page/RegisterPage.js";
import AddProduct from "./components/Product/AddProduct";
import EditProduct from "./components/Product/EditProduct";
import ProductList from "./components/Product/ListProduct.js";
import Cart from "./page/Cart.js";
import { Provider } from 'react-redux';
import store from './redux/store';
import Product from "./components/Product/Products.js";
import Checkout from "./page/Checkout.js";

function App() {
  const [userstate, setUserState] = useState({});

  return (   
     
    <BrowserRouter>
        <Provider store={store}>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/sliders" element={<Sliders />} />
        <Route path="/category" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </Provider>
    </BrowserRouter>
  
  );
}

export default App;
