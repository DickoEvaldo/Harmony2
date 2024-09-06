import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Harmony2" element={<MainPage />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
