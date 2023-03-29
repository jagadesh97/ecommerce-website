import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from './components/Navbar'; 
import { Shop } from "./components/pages/shop/Shop";
import { ShopContextProvider } from "./context/Shop-context"
import { Cart } from "./components/pages/cart/Cart";
import { Contact } from "./components/pages/Contact"
import "./App.css"
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path='/cart'element={<Cart/>} />
      </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
