import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Home />
      <Projects />
    </div>
  );
};

export default App;
