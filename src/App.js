import './App.css';
import Navbar from "./components/Navbar"
import './ModulCSS/navbar.css'
import HeroSection from './components/HeroSection';
import BgChanger from './components/BgChanger';
import Count from './components/Count';
import './ModulCSS/Hero.css'
import TestApi from './components/TestApi';
import PasswordGenretor from './components/PasswordGenretor';
import Password2 from './components/Password2';
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
