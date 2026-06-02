import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import AboutPage from './Components/AboutPage';
import NavBar from './Components/NavBar';
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './Routers/AppRoutes';

function App() {
  return (
    <>
    <BrowserRouter>
    <AppRoutes/>
    </BrowserRouter>
  </>
  );
}

export default App;
