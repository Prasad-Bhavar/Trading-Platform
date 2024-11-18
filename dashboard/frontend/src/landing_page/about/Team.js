import React from 'react';
function Team() {
    return ( 
        <div className='container mt-5'>
            
            <div className='row '>
                <div className='col-6 mt-3  '>
                    <div className='founder-img '>
                    <img   src='media/nithinkamath.jpg' alt='nithin kamath'/>
                    </div>
                    <div className='text-center text-muted mt-5'>
                    <h2>Nithin Kamath</h2>
                    <p>
                        founder CEO
                    </p>
                    </div>
                    
                </div>
                <div className='col-6  p-5'>
                <h1 className='mb-5'>People</h1>
                   <p className=''>
                   Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    <br/><br/>
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    <br/><br/>
                    Playing basketball is his zen.
                    <br/><br/>
                    Connect on  &nbsp; <a href='#' style={{textDecoration:'none'}}>Homepage</a> &nbsp; / &nbsp;  
                    <a href='#' style={{textDecoration:'none'}}>TradingQnA </a> &nbsp; /   &nbsp;
                    <a href='#' style={{textDecoration:'none'}}>Twitter</a> 
                   </p>
                </div>
            </div>
        </div>
     );
}

export default Team;