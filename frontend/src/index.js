import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import ProductPage from './landing_page/products/ProductPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/about' element={<AboutPage/>}></Route>
    <Route path='/products' element={<ProductPage/>}></Route>
    <Route path='/pricing' element={<PricingPage/>}></Route>
    <Route path='/support' element={<SupportPage/>}></Route>
    <Route path='*' element = {<NotFound/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
);

