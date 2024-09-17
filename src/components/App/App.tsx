import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import Login from "../Login";
import Register from "../Register";
import Profile from "../Profile";

import store from "../../store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
