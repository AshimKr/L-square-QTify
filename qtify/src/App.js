import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Section from "./component/Section/Section";
import SongsSection from "./component/Song/Song";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
        <Section  
          endpoint="https://qtify-backend-labs.crio.do/albums/top"
          title="Top Albums"
        />
        <Section  
          endpoint="https://qtify-backend-labs.crio.do/albums/new"
          title="New Albums"
        />
        <SongsSection />
        {/* <Routes>
          <Route path="/" element={<h1>Hello World</h1>} />
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
