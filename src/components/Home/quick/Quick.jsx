import React from 'react';
import '../quick/quickstyle.css';
import Typed from 'react-typed';

export const Quick = () => {
    return (

        <div className="quick">
            <h2 data-aos="fade-up">For <span>Q</span>uick Enquiry</h2>
            <div className="content-box">
                <div className="form-container" data-aos="fade-up" >
                    <h3>GET <span><Typed strings={['STARTED!']}
                        typeSpeed={50}
                        backSpeed={100}
                        backDelay={1000}
                        showCursor={false}
                        loop />
                    </span>
                    </h3>
                    <form action="">
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Mobile number' />
                        <input type="text" placeholder='Email address' />
                        <input type="text" placeholder='Message' />
                        <button type="submit">ENQUIRE NOW</button>
                    </form>
                </div>
                <div className="address" data-aos="fade-up">
                    <h2><i class="fa-solid fa-location-dot"></i> LOCATION</h2>
                    <h3>Only<span>Dogs</span></h3>
                    <p>EAST COAST ROAD<br />
                        NO:28 MAHABALIPURAM ROAD<br />
                        CHENNAI-600654, TAMILNADU<br />
                        MON-FRI 10AM - 9PM<br />
                        onlydogs123@gmail.com
                    </p>
                </div>
            </div>
        </div>
    )
}
