import React from 'react';
function Hero() {
    return (  
        <section className='support-Hero'>
            <div className='support-Title' id=''>
                <h4 className=''>Support Portal</h4>
                <a href='#'>track tickets</a>
                
            </div>
            <div className='row'>
                <div className='col-6  ' id='support-col'>
                    <p className='fs-4'>Search for an answer or browse help topics to create a ticket</p>
                    <input placeholder='Eg.how to I activate F&O'  style={{height:"3rem", width:'60%'}}/><br/>
                    <a href='#'>Track account opening</a>&nbsp;&nbsp;&nbsp;
                    <a href='#'> Track segment activation</a>&nbsp;&nbsp;
                    <a href='#'> Intraday margins</a>&nbsp;&nbsp;&nbsp;
                    <a href='#'>Kite user manual</a>
                </div>
                <div className='col-6  ' id='support-col'>
                    <p  className='fs-3'>Featured</p>
                    <ol>
                        <li>Current Takeovers and Delisting - November 2024</li>
                        <li>Rights Entitlements listing in November 2024</li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;