import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./NavBar";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import ResultsPage from "./ResultsPage";
import HeaderResults from "./HeaderResults";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
       {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<MainHeader />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/HeaderResults" element={<HeaderResults />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
