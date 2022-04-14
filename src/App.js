import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Movie from "./Movie/Movie";
import ProductDetails from "./Product/ProductDetails";
function App() {

  return (
    <div>
        <Header/>
       <Routes>
           <Route path="/" element={ <Home/> } />
           <Route path="/Movie" element={<Movie/>}/>
           <Route path="/products/:id" element={<ProductDetails/>}/>
       </Routes>
        <Footer/>
    </div>
  );
}

export default App;
