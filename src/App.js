import './App.css';
import Landingpage from './page/Landingpage';
import Memory from './page/Memory';
import About from './page/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return(
  <Router>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/memory' element={<Memory/>}/>
    </Routes>
  </Router>
  )
}

export default App;
