import { Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

function App() {

  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={SignUp} />
    </div>
  );
}

export default App;
