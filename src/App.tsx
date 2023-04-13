import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Auth } from "./pages/auth/Auth";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
