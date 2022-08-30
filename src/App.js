import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Home from './Home';
import Clinet from './pages/Client';
import MovieInner from './pages/MovieInner';
import Product from './pages/Product';
import Support from './pages/Support';
import './assets/styles/main.scss'


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieInner />} />
      </Routes>
    </>
  );
}

export default App;

