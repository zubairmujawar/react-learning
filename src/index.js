import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HeroSection from './components/HeroSection';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PasswordGenretor from './components/PasswordGenretor';
import Password2 from './components/Password2';
import Count from './components/Count';

const router = createBrowserRouter ([
  {
    path: '/',
    element:  <App/>,
    children: [
      {
        path: '',
        element: <HeroSection/>
      },
      {
        path: 'count',
        element: <Count/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
