import "./index.css";
import "./Styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Hotel from "./Pages/Hotel";
import Hotels from "./Pages/Hotels";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/hotels" element={<Hotels/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/register" element={<Login/>}/>
        <Route path="/login" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
