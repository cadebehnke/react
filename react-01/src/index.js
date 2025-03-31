import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Layout from './Layout';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Sale from './pages/Sale';
import About from './pages/About';
import Nopage from './pages/Nopage';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="sale" element={<Sale />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
