import Profile from "./components/Profile";
import Login from "./components/Login";

import "./App.css";
import ChangeColor from "./components/ChangeColor";

function App() {
  return (
    <div className="App">
      <h2>REDUX LOGIN PORTAL</h2>
      <Profile />
      <Login />

      <ChangeColor />
    </div>
  );
}

export default App;
