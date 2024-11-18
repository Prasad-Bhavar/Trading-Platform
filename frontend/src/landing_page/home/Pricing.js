import React from 'react';
function Pricing() {
    return (  
       <div className='container mb-5 mt-5'>
            <div className='row'>
                <div className='col-5 px-5'>
                    <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#' style={{textDecoration:'none'}}>See pricing  <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-1'></div>
                <div className='col-6 mt-3'>
                    <div className='row text-center'>
                        <div className='col border'>
                            <h1><sup><i class="fa-solid fa-indian-rupee-sign" style={{fontSize:'1rem'}}></i></sup>0</h1>
                            <p>free equity delivery and <br/> direct mutual funds</p>
                        </div>
                        <div className='col border'>
                            <h1><sup><i class="fa-solid fa-indian-rupee-sign" style={{fontSize:'1rem'}}></i></sup>20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default Pricing;