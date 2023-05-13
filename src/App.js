import Navbar from "./components/Navbar"
import Home from "./components/Home"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart"
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
       <Routes>
      <Route path="/" element={<Home/>}/>
     
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
