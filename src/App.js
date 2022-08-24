import "./App.css";
import { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import  Router  from "./Router";

const pages = ["Header", "Main", "Footer"];
function App() {
  const [numPage, setNumPage] = useState("Header");
  return (
    <div className="App">
      <BrowserRouter>
        {pages.map((pagePath) => (
          <Link to={pagePath}>{pagePath}</Link>
        ))}
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
