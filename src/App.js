import './App.css';
import Navbar from "./components/Navbar"
import './ModulCSS/navbar.css'
import { Outlet } from 'react-router-dom';
import UserContextProvider from './Context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
  
  <UserContextProvider>
  {/* <Navbar/> */}
  {/* <Outlet/> */}
  <Login/>
  <Profile/>
  </UserContextProvider>
  );
}

export default App;
