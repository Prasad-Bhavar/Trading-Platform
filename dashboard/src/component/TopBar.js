import React from 'react';
import TopbarWatchlist from './TopbarWatchlist';
import TopbarMenu from './TopbarMenu';
function TopBar() {
    return (
        < div className='top-bar'>
        <TopbarWatchlist/>
        <TopbarMenu/>
        </div>
      );
}

export default TopBar;