import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header.js';
import Cards from './components/Cards.js';
import Issue from './components/Issues.js';
import Speciality from "./components/Specialities.js";
import Footer from "./components/Footer.js";
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Cards />
    <Issue />
    <Speciality />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);