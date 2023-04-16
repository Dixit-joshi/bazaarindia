import React from "react"
import Header from "./Header"
import Home from "./Home"
import Footer from "./Footer"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Checkout from "./Checkout"
import Login from "./Login"
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Checkout' element={<Checkout/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
 
  );
}

export default App;
