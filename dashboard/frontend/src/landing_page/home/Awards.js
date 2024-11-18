import React from 'react';
function Awards() {
    return ( 
        <div className='container p-5 '>
            <div className='row'>
                <div className='col-6 mt-5 p-5'>
                    <img src='media/largestBroker.svg' alt='largest broker Img' ></img>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1 className='mt-3'>Largest stock Broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order voolumes in India daily by trading and investing in </p>
                    <ul>
                        {/* <div className='container'> */}
                        <div className='row '>
                            <div className='col-6'>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity</p></li>
                                <li><p>Currency derivatives</p></li>
                            </div>
                            <div className='col-6'>
                                <li><p>Sticksn& IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Goverment Security</p></li>
                            </div>
                            
                        </div> 
                        <img src='media/pressLogos.png' alt='pressLogo' style={{width:'90%'}}/>
                        {/* </div> */}
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Awards;