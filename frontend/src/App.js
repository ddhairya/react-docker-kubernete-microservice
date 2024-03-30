import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ServerApi from './ServerApi';
import test from './test';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/other">Test</Link>
        </header>
        <div>
          <Route exact path = '/' component={ServerApi}></Route>
          <Route path = '/other' component={test}></Route> 
        </div>
      </div>
    </Router>
  );
}

export default App;
