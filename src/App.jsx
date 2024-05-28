import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import FakeStoreProducts from "./components/Category";
import FakeStoreRatings from "./components/FakeStoreRatings";

function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} /> 
            <Route path="/product/:id" element={<ProductDetails />} >
               <Route path='ratings/:id' element={<FakeStoreRatings />}></Route>
            </ Route >
            <Route path='products/:category' element={<FakeStoreProducts />}></Route>
            <Route path="/cart"  element={<Cart />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
