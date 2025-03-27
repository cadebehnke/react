import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowswerRouter, Routes, Route} from "react-router-dom"
import './index.css';
import Home from './components/Home';

function App() {
  return(
  <BrowserRouter>
  </BrowserRouter>
    Hi
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
