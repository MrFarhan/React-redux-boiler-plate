import './App.css';
import { Signup } from './Components/Signup';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Login } from './Components/Login';
import { Dashboard } from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Login } from './Components/Login';

function App() {
  return (
    <Router>

      <div className="App">
        <h1 className="heading">Welcome to the world</h1>
      <switch>
        <Route exact path="/" >  <Login /></Route>
        <Route path="/signup" ><Signup /></Route>
        <Route path="/dashboard" ><Dashboard /></Route>
      </switch>

        {/* <Login /> */}
        {/* <Signup /> */}
      </div>
    </Router >
  );
}

export default App;
