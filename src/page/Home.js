// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
// import { useState } from "react";
//import Dashboard from "../components/Dashboard/Dashboard";
import Sliders from "../components/Dashboard/Sliders";
import Footer from "../components/Dashboard/Footer";
import Product from "../components/Product/Product";
import Category from "../components/Dashboard/Category";
import NavBar from "../components/Dashboard/NavBar";



const  Home = () =>  {

    return (
       <div>
      <NavBar />
      <h2/>
      <Sliders />
      <h1/>
      <Category />
      <h1/>
      <Product 
      />
      <h2/>
      <Footer />
     <h2/>
      
  </div>
    );
  }
export default Home;

