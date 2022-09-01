import "./App.css";
import { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Footer from "./components/featurs/Footer/Footer";
import Header from "./components/featurs/Header/Header";
import Navbar from "./components/featurs/Navbar/Navbar";

const pages = ["Home", "About", "ContactUs", "PageNotFound"];
function App() {
  const [numPage, setNumPage] = useState("Home");
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
