import logo from './logo.svg';
import './App.css';
import Landingpage from './page/Landingpage';
import Hobby from './page/Hobby';
import About from './page/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './assets/components/Header';

function App() {
  
  <Router>
    <Routes>
      <Route exact path="/">
      <Landingpage/>
      </Route>
      <Route path="/about">
      <About/>
      </Route>
      <Route path="/hobby">
      <Hobby />
      </Route>
    </Routes>
  </Router>

}

export default App;
