import React from 'react';
function LeftSection({imageURL,productName,productDiscription,tryNow,learnMore,googleApp,appleStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
            <div className='col-6 p-3'>
                <img src={imageURL} />
            </div>
            <div className='col-6 mt-5 p-3'>
                <h1 className='mt-5'>{productName}</h1>
                <p className='mt-2'>{productDiscription}</p>
                <div className='mt-3'>
                    <a href='tryNow' style={{textDecoration:'none'}}>{tryNow}</a>
                    <a href='learnMore' style={{textDecoration:'none'}} className='mx-4'>{learnMore}</a>
                </div>
                <div className='mt-3'>
                    <a href={googleApp}><img src='media/googlePlayBadge.svg'/></a>&nbsp;&nbsp;
                    <a href={appleStore}><img src='media/appStoreBadge.svg'/></a>
                </div>
            </div>
            </div>
        </div>
     );
}

export default LeftSection;