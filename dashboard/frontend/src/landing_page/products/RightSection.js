import React from 'react';
function RightSection({title,description, link,imageURL}) {
    return ( 
        <div className='container mt-5'>
        <div className='row '>
            <div className='col-6 mt-5 p-5' >
                <h1 className='mt-5'>{title}</h1>
                <p className='mt-2'>{description}</p>
                <div className='mt-3'>
                    <a href='tryNow' style={{textDecoration:'none'}}>{link}</a>
                </div>
            </div>
            <div className='col-6 '>
                <img src={imageURL} />
            </div>
        
        </div>
    </div>
     );
}

export default RightSection;