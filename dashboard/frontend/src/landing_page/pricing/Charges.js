import React from 'react';
function Charges() {
    return ( 
        <div className='container'>
            
            <div className='row p-5'>
            <h1 className='fs-2 text-muted mb-5 '>Charges explained</h1>
                <div className='col-6 p-4'>

                   <h2 className='fs-4 text-muted'>Securities/Commodities transaction tax</h2>
                   <p className='text-muted'>
                   Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
                    <br/><br/>
                    When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                   </p>
                   <br/><br/>
                   <h2 className='fs-4 text-muted'>Transaction/Turnover Charges</h2>
                   <p className='text-muted'>
                   Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
                                    <br/><br/>
                    BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
                    <br/><br/>
                    BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.
                    <br/><br/>
                    BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.
                    <br/><br/>
                    BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
                    <br/><br/>
                    
                   </p>
                   <h2 className='fs-4 text-muted'>Call & trade</h2>
                   <p className='text-muted'>
                   Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
                   <br/><br/>
                   </p>
                   <h2 className='fs-4 text-muted'>Stamp charges</h2>
                   <p className='text-muted'>
                   Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
                   <br/><br/>
                   </p>
                </div>
                <div className='col-6 p-4'>
                    <h2 className='fs-4 text-muted'>NRI brokerage charges</h2>
                    <ul className='text-muted'>
                        <li >₹100 per order for futures and options.</li>
                        <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower)</li>
                        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                    </ul>
                    <h2 className='fs-4 text-muted'>GST</h2>
                   <p className='text-muted'>
                   Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)
                   <br/><br/>
                   </p>
                   <h2 className='fs-4 text-muted'>SEBI Charges</h2>
                   <p className='text-muted'>
                   Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
                   <br/><br/>
                   </p>
                   <h2 className='fs-4 text-muted'>DP (Depository participant) charges</h2>
                   <p className='text-muted'>
                   ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.
                    <br></br><br/>
                    Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.
                    <br/><br/>
                    Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
                   <br/><br/>
                   </p>
                   <h2 className='fs-4 text-muted'>AMC (Account maintenance charges)</h2>
                   <p className='text-muted'>
                   For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA,<a href='#' style={{textDecoration:'none'}}>Click here</a> 
                    <br/><br/>
                    For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href='#' style={{textDecoration:'none'}}>Click here</a>
                   <br/><br/>
                   </p>
                </div>
                
            </div>
        </div>
     );
}

export default Charges;