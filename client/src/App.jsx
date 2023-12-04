import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Room from "./pages/Room";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/*" element={<div>404 Page Not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
