import { Route, Routes } from "react-router-dom";
import Auth from "./components/auth";
import Home from "./components/home";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
