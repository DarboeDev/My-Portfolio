import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar, ContactButtons } from "./components";
import "./App.scss";

// App
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      <ContactButtons />
    </div>
  );
};

export default App;
