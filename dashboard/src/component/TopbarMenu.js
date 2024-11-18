import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './css/menu.css';

function TopbarMenu() {

    let [selectedMenu,setSelectedMenu] =useState(0);
    let [isProfileDropdownOpen,setIsProfileDropdownOpen] =useState(false);
    
    let handleMenuClick =(index)=>{
        setSelectedMenu(index);
    }
    let handleProfileClick = ()=>{
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    }

    const menuClass = 'menu-class';
    const activeMenuClass = 'active-menu-class';

    return ( 
        <div className='menu-container'>
                <img src='media/backarrow.png' style={{height:'2rem'}} alt='backarrow'/>
                <ul className='menu-links'>
                    <p ><Link to={'/'} style={{textDecoration:'none'}} className={selectedMenu===0 ? activeMenuClass:menuClass} onClick={()=>handleMenuClick(0)}>Dashboard</Link></p>
                    <p><Link to={'/holdings'} style={{textDecoration:'none'}} className={selectedMenu===1 ? activeMenuClass:menuClass} onClick={()=>handleMenuClick(1)}>Holdings</Link></p>
                    <p><Link to={'/positions'} style={{textDecoration:'none'}} className={selectedMenu===2 ? activeMenuClass:menuClass} onClick={()=>handleMenuClick(2)}>Positions</Link></p>
                    <p><Link to={'/funds'} style={{textDecoration:'none'}} className={selectedMenu===3 ? activeMenuClass:menuClass}onClick={()=>handleMenuClick(3)}>Funds</Link></p>
                    <p><Link to={'/apps'} style={{textDecoration:'none'}} className={selectedMenu===4 ? activeMenuClass:menuClass} onClick={()=>handleMenuClick(4)}>Apps</Link></p>
                                    
                </ul>
            
            <div className='user-info'>
            <p className={selectedMenu===5 ? activeMenuClass:menuClass} onClick={()=>handleProfileClick()}>
            <i className="fa-solid fa-user-tie"></i>&nbsp; User
            </p>
            </div>
           
        </div>
     );
}

export default TopbarMenu;