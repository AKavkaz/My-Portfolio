import "./index.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Stars from "./components/Stars";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Stars />
      <Nav />
      <Main />
    </Router>
  );
}

export default App;
