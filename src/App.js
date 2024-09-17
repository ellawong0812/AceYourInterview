//import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import FeedBack from "./Components/FeedBack";
import Pricing from "./Components/Pricing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import CheckOut from "./Components/CheckOut";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/FeedBack" element={<FeedBack />} />
          <Route path="/CheckOut" element={<CheckOut />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
