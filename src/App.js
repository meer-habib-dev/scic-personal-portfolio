import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
