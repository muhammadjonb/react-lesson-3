import React from "react";
import { Footer, Header, Hero } from "./components";
import './App.scss'
import "./scss/main.scss";

const App = () => {
  return (
    <>
      <Header />
      <a href="#" className="back-top">
        <ion-icon name="chevron-up-outline"></ion-icon>
      </a>
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default App;
