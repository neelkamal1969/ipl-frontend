import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Matches from "./pages/Matches";
import About from "./pages/About";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/matches">Matches</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
