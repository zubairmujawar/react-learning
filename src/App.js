import './App.css';
import Navbar from "./components/Navbar"
import './ModulCSS/navbar.css'
import './ModulCSS/Hero.css'

import { Outlet } from 'react-router-dom';

function App() {
  return (
  
  <>
  <Navbar/>
  <Outlet/>
  </>
  );
}

export default App;
