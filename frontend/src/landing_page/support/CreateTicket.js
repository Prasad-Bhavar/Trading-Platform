import React from 'react';
function CreateTicket() {
    return (
        <div className='container p-5'>
          <div className='row'>
            <h1 className='text-muted fs-3 mb-5'>To create a ticket, select a relevant topic</h1>
            <div className='col-4'>
                <p className='fs-4 mb-4'><i class="fa-solid fa-circle-plus"></i>&nbsp;&nbsp;&nbsp;Account Opening</p>
                <ul>
                <a href='#' style={{textDecoration:'none'}}>Getting started</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Online</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Offline</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Charges</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Company, Partnership and HUF</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Non Resident Indian (NRI)</a><br/><br/>
                </ul>
            </div>
            <div className='col-4'>
            <p className='fs-4 mb-4'><i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;Your Zerodha Account</p>
                <ul>
                <a href='#' style={{textDecoration:'none'}}>Login credentials</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Account modification and segment addition</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>CMR & DP ID</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Nomination</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Company, Partnership and HUF</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Transfer and conversion of shares</a><br/><br/>
                </ul>
               
            </div>
            <div className='col-4'>
            <p className='fs-4 mb-4'><i class="fa-solid fa-chart-line"></i>&nbsp;&nbsp;&nbsp;Trading and Markets </p>
                <ul>
                <a href='#' style={{textDecoration:'none'}}>Trading FAQs</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Kite</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Margins</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Product and order types</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Corporate actions</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Kite features</a><br/><br/>
                </ul>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-4'>
                <p className='fs-4 mb-4'><i class="fa-solid fa-circle-plus"></i>&nbsp;&nbsp;&nbsp;Funds</p>
                <ul>
                <a href='#' style={{textDecoration:'none'}}>Fund withdrawal</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Adding bank accounts</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>eMandates</a><br/><br/>
                </ul>
            </div>
            <div className='col-4'>
            <p className='fs-4 mb-4'><i class="fa-solid fa-terminal"></i>&nbsp;&nbsp;&nbsp;Console</p>
                <ul>
                <a href='#' style={{textDecoration:'none'}}>IPO</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Portfolio</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Funds statement</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Profile</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Reports</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Referral program</a><br/><br/>
                </ul>
               
            </div>
            <div className='col-4'>
            <p className='fs-4 mb-4'><i class="fa-solid fa-coins"></i>&nbsp;&nbsp;&nbsp;Coin</p>
                <ul>
                <a href='#' style={{textDecoration:'none'}}>Understanding mutual funds and Coin</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Coin app</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Coin web</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Product and order types</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>Corporate actions</a><br/><br/>
                <a href='#' style={{textDecoration:'none'}}>National Pension Scheme (NPS)</a><br/><br/>
                </ul>
            </div>
          </div>
        </div>
      );
}

export default CreateTicket;