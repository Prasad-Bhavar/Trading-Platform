import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/homeHero.png' alt='Hero Img' className='mb-5' />
                <h1 className='mt-3'>Invest in everything</h1>
                <p className='mt-2 fs-5' >Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary p-3' style={{width:'20%',margin:'0 auto'}}>Sign up for free</button>
            </div>

        </div>
     );
}

export default Hero;