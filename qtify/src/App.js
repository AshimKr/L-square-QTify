import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<h1>Hello World</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
