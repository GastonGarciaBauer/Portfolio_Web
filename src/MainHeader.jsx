import React from "react";
import SearchBar from "./SearchBar";
import Navbar from "./NavBar";

function MainHeader() {
  return (
    <div>
      <Navbar />
      <header className="main-header">
        <h1 className="logo">
          <span className="letter" style={{ color: "#4285F4" }}>
            G
          </span>
          <span className="letter" style={{ color: "#EA4335" }}>
            a
          </span>
          <span className="letter" style={{ color: "#FBBC05" }}>
            s
          </span>
          <span className="letter" style={{ color: "#34A853" }}>
            t
          </span>
          <span className="letter" style={{ color: "#EA4335" }}>
            ó
          </span>
          <span className="letter" style={{ color: "#4285F4" }}>
            n
          </span>
        </h1>
        <SearchBar />
      </header>
    </div>
  );
}

export default MainHeader;
