import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom'
import Accueil from './component/accueil'
import Apropos from './component/apropos'
import Contact from './component/contact'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
            <ul className="liste">
              <li><Link to="/accueil">Accueil</Link></li>
              <li><Link to="/apropos">A propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>

            <Route path="/" exact component={Accueil} />
            <Route path="/accueil" component={Accueil} />
            <Route path="/apropos" component={Apropos} />
            <Route path="/contact" component={Contact} />
        </header>
      <footer>
        <center>footer</center>
      </footer>
      </div>
      </Router>
    );
  }
}

export default App;
