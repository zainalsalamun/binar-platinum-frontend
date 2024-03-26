import "./App.css";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Sliders from "./components/Dashboard/Sliders";
import Footer from "./components/Dashboard/Footer";
import Product from "./components/Product/Product";
import Category from "./components/Dashboard/Category";

function App() {
  const [userstate, setUserState] = useState({});
  
  return (
    <div>
      <Dashboard />
      <h2/>
      <Sliders />
      <h1/>
      <Category />
      <h1/>
      <Product />
      <h2/>
      <Footer />
      <h2/>
      
 
  </div>
    // <div className="App">
    //   <Router>
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={
    //           userstate && userstate._id ? (
    //             <Profile
    //               setUserState={setUserState}
    //               username={userstate.fname}
    //             />
    //           ) : (
    //             <Login setUserState={setUserState} />
    //           )
    //         }
    //       ></Route>
    //       <Route
    //         path="/login"
    //         element={<Login setUserState={setUserState} />}
    //       ></Route>
    //       <Route path="/signup" element={<Register />}></Route>
  

    //     </Routes>
    //   </Router>
    // </div>
  );
}

export default App;
