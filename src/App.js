import "./App.css";
import Profile from "./components/Profile/Profile";
//import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
//import Dashboard from "./components/Dashboard/Dashboard";
import Sliders from "./components/Dashboard/Sliders";
import Footer from "./components/Dashboard/Footer";
import Product from "./components/Product/Product";
import Category from "./components/Dashboard/Category";
import NavBar from "./components/Dashboard/NavBar";
import ProductDetail from "./components/Product/ProductDetail";
import Home from "./page/Home.js";
import LoginPage from "./page/LoginPage.js";
import RegisterPage from "./page/RegisterPage.js";
import AddProduct from "./components/Product/AddProduct";
import EditProduct from "./components/Product/EditProduct";
import ProductList from "./components/Product/ListProduct.js";

function App() {
  const [userstate, setUserState] = useState({});
  
  return (   
     
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/sliders" element={<Sliders />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product-list" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
