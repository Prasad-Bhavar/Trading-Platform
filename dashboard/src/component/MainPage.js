import React from 'react';
// import Home from './Home';
import Dashboard from './Dashboard';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Apps from './Apps';
import { Routes,Route } from 'react-router-dom';
import Watchlist from './Watchlist';
// import GeneralContext from './GenralContext';

function MainPage() {
    return ( 
        <div className='main-Page'>
           {/* <GeneralContext> */}
                <Watchlist/>
            {/* </GeneralContext> */}
            
            <div className='content' >
                
                <Routes> 
                    {/* <Route exact path='/' element={<Home/>}></Route> */}
                    <Route exact path='/' element={<Dashboard/>}></Route>
                    <Route path='/holdings' element={<Holdings/>}></Route>
                    <Route path='/positions' element={<Positions/>}></Route>
                    <Route path='/funds' element={<Funds/>}></Route>
                    <Route path='/apps' element={<Apps/>}></Route> 
                </Routes>
                
                

            </div>
        </div>


        // <div className='main-page'>
        //     <BrowserRouter>
        //     {/* <Watchlist/> */}
        //     <div className='content'>
        //         <Router>
        //             <Route path='/dashboard' element={<Dashboard/>}></Route>
        //             <Route path='/holdings' element={<Holdings/>}></Route>
        //             <Route path='/positions' element={<Positions/>}></Route>
        //             <Route path='/funds' element={<Funds/>}></Route>
        //             <Route path='/app' element={<Apps/>}></Route>
        //         </Router>
        //     {/* <Dashboard/> */}
        //     </div>
        // </BrowserRouter>
        // </div>
        

     );
}

export default MainPage;