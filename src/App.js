import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import FeedBack from "./Components/FeedBack";
import Pricing from "./Components/Pricing";

function App() {
  return (
    <div>
      <Home />
      <Blog />
      <FeedBack />
      <Pricing />
    </div>
  );
}

export default App;
