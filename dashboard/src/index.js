import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './component/Home';

// import NotFound from './component/NotFound';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 
 <Routes>
    <Route path='/*' element={<Home/>}></Route>
    {/* <Route path='*' element = {<NotFound/>}/> */}
 </Routes>

 </BrowserRouter>
);


