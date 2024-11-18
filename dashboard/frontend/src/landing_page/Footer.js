import React from 'react';
function Footer() {
    return (  
        <footer style={{backgroundColor:'rgb(250,250,250)'}}>
        <div className='container mt-5 border-top'>
            <div className='row mt-5'>
                <div className='col-3'>
                    <img src='media/logo.svg' alt='logo' style={{width:'60%'}}/>
                    <p className='mt-5 text-muted'>© 2010 - 2024, Zerodha Broking Ltd.<br/>All rights reserved.</p>
                    <div className='footer-icons mt-5'>
                    <i class="fa-brands fa-x-twitter"  ></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <hr/>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-square-twitter"></i>
                    </div>
                </div>
                <div className='col-3 footer-links'>
                    <h1 className='fs-3 mb-5'>Company</h1>
                    <a href='#' >About</a><br/><br/>
                    <a href='#' >Products</a><br/><br/>
                    <a href='#' >Pricing</a><br/><br/>
                    <a href='#' >Referral programme</a><br/><br/>
                    <a href='#' >Careers</a><br/><br/>
                    <a href='#' >Zerodha.tech</a><br/><br/>
                    <a href='#' >Press & media</a><br/><br/>
                    <a href='#' >Zerodha Cares (CSR)</a><br/>
                </div>
                <div className='col-3 footer-links'>
                    <h1 className='fs-3 mb-5'>Support</h1>
                    <a href='#'>Contact us</a><br/><br/>
                    <a href='#'>Support portal</a><br/><br/>
                    <a href='#'>Z-Connect blog</a><br/><br/>
                    <a href='#'>List of charges</a><br/><br/>
                    <a href='#'>Downloads & resources</a><br/><br/>
                    <a href='#'>Videos</a><br/><br/>
                    <a href='#'>Market overview</a><br/><br/>
                    <a href='#'>How to file a complaint?</a><br/><br/>
                    <a href='#'>Status of your complaints</a><br/>
                </div>
                <div className='col-3 footer-links'>
                    <h1 className='fs-3 mb-5'>Account</h1>
                    <a href='#'  className='mb-5'>Open an account</a><br/><br/>
                    <a href='#' className='mb-5'>Fund transfer</a><br/>
                </div>
            </div>
            
            <p className='footer-info mt-5 p-5'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
<br/><br/>
Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
<br/>
Smart Online Dispute Resolution | Grievances Redressal Mechanism
<br/>
Investments in securities market are subject to market risks; read all the related documents carefully before investing.
<br/><br/>
Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
<br/><br/>
"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
<div className='footer-links text-center mb-4  '>
<a href='#'>NSE</a>&nbsp;&nbsp;&nbsp; <a href='#'>BSE</a>&nbsp;&nbsp;&nbsp; <a href='#'>MCX</a> &nbsp;&nbsp;&nbsp;<a href='#'>Terms & conditions</a> <a href='#'>Policies & procedures </a>&nbsp;&nbsp;&nbsp;<a href='#'>Privacy policy Disclosure For investor's attention</a> &nbsp;&nbsp;&nbsp;<a href='#'>Investor charter</a>
</div>
        </div>
        </footer>
    );
}

export default Footer;