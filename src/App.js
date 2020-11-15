import './App.css';
import { Signup } from './Components/Signup';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom"
import { Login } from './Components/Login';
import { Dashboard } from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {store } from './Redux/Store' 

function App() {
  return (
    <Provider store={store}>
      <Router>

        <div className="App">
          <h1 className="heading">Welcome to the world</h1>
          <Switch>
            <Route exact path="/" >  <Login /></Route>
            <Route path="/signup" ><Signup /></Route>
            <Route path="/dashboard" ><Dashboard /></Route>
          </Switch>

         
        </div>
      </Router >
    </Provider>
  );
}

export default App;
