import React from 'react';
import Hero from '../products/Hero';
import LeftSection from '../products/LeftSection';
import RightSection from '../products/RightSection';
import Universe from '../products/Universe';

function ProductPage() {
    return ( 
        <>      
        <Hero/>
      <LeftSection imageURL="media\kite.png"
      productName='Kite'
      productDiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
      tryNow='try it'
      learnMore='Learn More'
      googleApp=''
      appleStore=''
      />
      <RightSection title='Console'
                    description='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'
                    link='Learn more '
                    imageURL='media\console.png'/>
      
      <LeftSection imageURL="media\kite.png"
      productName='Coin'
      productDiscription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
      tryNow='coin'
      learnMore=''
      googleApp='https://play.google.com/store/apps/details?id=com.zerodha.coin'
      appleStore='https://apps.apple.com/in/app/zerodha-coin-mutual-funds/id1392892554'
      />

<RightSection title='Kite Connect API'
                    description='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'
                    link='kite connect '
                    imageURL='media\kiteconnect.png'/>

      <LeftSection imageURL="media\varsity.png"
      productName='Varsity mobile'
      productDiscription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      tryNow=''
      learnMore=''
      googleApp=''
      appleStore=''
      />
    
      <Universe/>
      </>

      

     );
}

export default ProductPage;