import React from 'react';
function Brokerage() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row p-2 '>
                <div className='col-4 text-center p-4'>
                    <img src='media/pricing0.svg' style={{height:'40%'}}/>
                    <h1>Free equity delivery</h1>
                    <p  className='mt-5 fs-5 text-muted'>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 text-center p-4'>
                    <img src='media\intradayTrades.svg' style={{height:'40%'}}/>
                    <h1>Intraday and F&O trades</h1>
                    <p className='mt-1 fs-5 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 text-center p-4'>
                    <img src='media/pricingMF.svg' style={{height:'40%'}}/>
                    <h1>Free direct MF</h1>
                    <p className='mt-5 fs-5 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
            <h2 className='text-mutes text-center'>Calculate your costs upfront using our brokerage calculator</h2>
        </div>
     );
}

export default Brokerage;