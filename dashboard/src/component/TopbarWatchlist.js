import React from 'react';
function TopbarWatchlist() {
    return ( 
        <div className='topbar-watchlist border-bottom '>
            <div className='nifty-sensex'>
                <div className='nifty'>
                    <p className='nifty-title'>NIFTY 50</p>&nbsp;
                    <p className='number'>{100.5}</p>&nbsp;
                    <p className=''>%</p>&nbsp;&nbsp;&nbsp;
                </div>
                <div className='sensex'>
                    <p className='sensex-title'>SENSEX</p>&nbsp;&nbsp;
                    <p className='number'>{200.5}</p>&nbsp;
                    <p>%</p>
                </div>
            </div>
        </div>
     );
}

export default TopbarWatchlist;