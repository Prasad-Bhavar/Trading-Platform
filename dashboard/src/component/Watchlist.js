import React from 'react';
import { watchlist } from '../data/data';
// import {Tooltip,Grow} from '@mui/material';

import './css/watchlist.css';
import WatchListItem from './WatchListItem';

function Watchlist() {
    return ( 
        <div className='watchlist' >
            <div className='search-bar mb-3' >
                <span>
                <input placeholder='search eg.info, reliance, tcs etc.' style={{width:'90%', height:'2.5rem', padding:'1rem',border:'none'}}/>
                </span>
                <span className='text-muted'>{watchlist.length}/12</span>
            </div>
           <ul>
                {watchlist.map((stock,idx)=>{
                    return(
                       <WatchListItem stock={stock} key={idx}/>
                    );
                })}
           </ul>
        </div>
     );
}

// const WatchListItem = ({stock})=>{

//     const [showWatchlistAction , setShowWatchlistAction] = useState(false);
//     // console.log(showWatchlistAction);
//     const handleMouseEnter = (evt)=>{
//         console.log(showWatchlistAction);
//         setShowWatchlistAction(true);
        
//     };
//     const handleMouseLeave= (evt)=>{
//         setShowWatchlistAction(false);
//         console.log(showWatchlistAction);
//     };
    

//     return (
        
//         <li className='list-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{fontSize:'0.7rem',listStyleType: 'none', padding:'0 1.5rem 0 0'}}>
//             <div className='item'>
//                 <p className={stock.isDown?'loss':'profit'}>{stock.name}</p>
//                 <div className='stock-info'>
//                     <span style={{marginRight:'1rem'}}>
//                         {stock.percent}
//                     </span>
//                     <span>
//                         {stock.price}
//                     </span>
//                 </div>
//             </div>
//             {showWatchlistAction && <WatchlistItemAction uid={stock.name}/>}            
//         </li>
        
//     );
// };




// const WatchlistItemAction = ({uid})=>{
//     return
//     (
//         <>
//         <span className='action'>
//              <span>
//                 <Tooltip
//                 title="Buy (B)"
//                 placement="top"
//                 arrow
//                 TransitionComponent={Grow}
//                 >
//                 <button className="buy">Buy</button>
//                 </Tooltip>
//                 </span>
//         </span>
//         </>
//     )
// }

export default Watchlist;



// export default WatchListItem;

