// src\App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Tools from "./pages/Tools.jsx";
cea
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/gear">Gear</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gear" element={<Tools />} />
      </Routes>
    </Router>
  );
}

export default App;
