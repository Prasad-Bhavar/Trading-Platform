import React from 'react';
function Universe() {
    return ( 
        <div className='container p-5 mt-4'>
              <p className='text-center fs-3'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
              <div className='row p-5'>
                    <div className='col-4 p-4'>
                        <img src='media/smallcaseLogo.png'/>
                        <p className='mt-3'>Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.</p>
                    </div>
                    <div className='col-4 p-4'>
                        <img src='media/streakLogo.png' style={{height:'40%', width:'40%'} }/>
                        <p className='mt-3'>Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.</p>
                    </div>
                    <div className='col-4 p-4'>
                        <img src='media/zerodhaFundhouse.png' style={{height:'40%', width:'40%'} }/>
                        <p className='mt-3'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                    </div>
              </div>
              <div className='row p-5'>
                    <div className='col-4 p-4'>
                        <img src='media/dittoLogo.png' style={{height:'40%', width:'40%'} }/>
                        <p className='mt-3'>Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>
                    </div>
                    <div className='col-4 p-4'>
                        <img src='media/sensibullLogo.svg' style={{height:'40%', width:'40%'} }/>
                        <p className='mt-3'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.</p>
                    </div>
                    <div className='col-4 p-4'>
                        <img src='media/goldenpiLogo.png' style={{height:'40%', width:'50%'} }/>
                        <p className='mt-3'>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
                    </div>
                    <button className='btn btn-primary mt-5 fs-4' style={{margin:'0 auto', width:'20%' }}>Sign up for Free</button>
              </div>
              
        </div>
     );
}

export default Universe;