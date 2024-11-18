import React,{useState}from 'react';
// import { watchlist } from '../data/data';
// import {keyboardArrowDown,keyboardArrowUp} from '@mui/icons-material';
import {Tooltip,Grow} from '@mui/material';

const WatchListItem = ({stock})=>{

    const [showWatchlistAction , setShowWatchlistAction] = useState(false);
    // console.log(showWatchlistAction);
    const handleMouseEnter = (evt)=>{
        console.log(showWatchlistAction);
        setShowWatchlistAction(true);
        
    };
    const handleMouseLeave= (evt)=>{
        setShowWatchlistAction(false);
        console.log(showWatchlistAction);
    };
    

    return (
        
        <li className='list-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{fontSize:'0.7rem',listStyleType: 'none', padding:'0 1.5rem 0 0'}}>
            <div className='item'>
                <p className={stock.isDown?'loss':'profit'}>{stock.name}</p>
                <div className='stock-info'>
                    <span style={{marginRight:'1rem'}}>
                        {stock.percent}
                    </span>
                    {/* <span>{stock.isDown ? (<keyboardArrowDown/>):(<keyboardArrowUp/>)}</span> */}
                    <span>
                        {stock.price}
                    </span>
                </div>
            </div>
            {showWatchlistAction && <WatchlistItemAction uid={stock.name}/>}            
        </li>
        
    );
};

const WatchlistItemAction = ({ uid }) => {
    return (
        <span className="action">
            
            <Tooltip
                title="Buy (B)"
                placement="top"
                arrow
                TransitionComponent={Grow}
            >
                <button className="btn btn-primary watchlist-btn"  style={{marginLeft:'8rem'}}>Buy</button>
            </Tooltip>
        
            <Tooltip
                title="Sell (S)"
                placement="top"
                arrow
                TransitionComponent={Grow}
            >
                <button className="btn btn-danger watchlist-btn">Sell</button>
            </Tooltip>
            <Tooltip
                title="Analytics"
                placement="top"
                arrow
                TransitionComponent={Grow}
            >
                <button className="btn btn-warning watchlist-btn"><i class="fa-solid fa-chart-simple"></i></button>
            </Tooltip>
            <Tooltip
                title="More"
                placement="top"
                arrow
                TransitionComponent={Grow}
            >
                <button className="btn btn-secondary watchlist-btn"><i class="fa-solid fa-ellipsis"></i></button>
            </Tooltip>
          
            
        </span>
    );
};
export default WatchListItem;

