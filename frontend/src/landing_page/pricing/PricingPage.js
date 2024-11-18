import React from 'react';
import Hero from '../pricing/Hero';
import Brokerage from '../pricing/Brokerage'
import OpenAccount from '../OpenAccount';
import Charges from './Charges';
function PricingPage() {
    return ( 
        <>
        <Hero/>
        <Brokerage/>
        <Charges/>
        <OpenAccount/>
        
        </>
     );
}

export default PricingPage;