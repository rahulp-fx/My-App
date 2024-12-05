import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import Courses from "./Courses";
import About from "./About";
import Users from "./Users";
import NavBar from "./NavBar";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/courses" element={<Courses/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
