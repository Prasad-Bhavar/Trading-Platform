import React from 'react';
import './css/dashboard.css';

function Dashboard() {
    return (  
        <>
        <div className="username dashboard-spacing mt-5">
          <h6>Hi, User!</h6>
          <hr className="divider" />
        </div>
  
        <div className="section-dashboard dashboard-spacing ">
          <span>
            <p className='mb-5'>Equity</p>
          </span>
  
          <div className="data-dashboard mb-5 ">
            <div className="first mx-5">
              <h3 >3.74k</h3>
              <p className='mt-3'>Margin available</p>
            </div>
            <hr />
  
            <div className="second ">
              <p>
                Margins used <span>0</span>{" "}
              </p>
              <p>
                Opening balance <span>3.74k</span>{" "}
              </p>
            </div>
          </div>
          <hr className="divider " />
        </div>
  
        <div className="section dashboard-spacing mt-5">
          <span>
            <p className='mb-5'>Holdings (13)</p>
          </span>
  
          <div className="data-dashboard">
            <div className="first mx-3">
              <h3 className="profit">
                1.55k <small>+5.20%</small>{" "}
              </h3>
              <p className='pl'>P&L</p>
            </div>
            <hr />
  
            <div className="second">
              <p>
                Current Value <span>31.43k</span>{" "}
              </p>
              <p>
                Investment <span>29.88k</span>{" "}
              </p>
            </div>
          </div>
          <hr className="divider" />
        </div>
      </>
    );
}

export default Dashboard;