import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    return(
        <div className='newsLetter'>
            <h1>Get Exclusive Ofeers on your Email</h1>
            <p>Subscribe to our newsletter and stay update</p>
            <div >
                <input type="email" placeholder='Your email id'/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter;