import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Listing from "./components/listing/Listing";
import Details from "./components/details/Details";
// import Cart from "./components/busket/Cart";
import Home from "./components/home/Home";
import PlaceOrder from "./components/busket/PlaceOrder";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Listing/:mealid" element={<Listing />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/PlaceOrder/:restName" element={<PlaceOrder />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
