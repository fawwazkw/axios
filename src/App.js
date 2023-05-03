import './App.css';
import Landingpage from './page/Landingpage';
import Memory from './page/Memory';
import About from './page/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: process.env.REACT_APP_COLOR_PRIMARY,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/about' element={<About />} />
          <Route path='/memory' element={<Memory />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;