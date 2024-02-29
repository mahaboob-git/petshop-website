import React from 'react';
import '../footer/footerstyle.css';

export const Footer = () => {
    return (
        <>
            <footer>
                <h1 data-aos="fade-down">Only<span>Dogs</span></h1>
                <div className="foot-content">
                    <div className="about" data-aos="fade-right">
                        <h2>About us</h2>
                        <p>OnlyDogs is family owned and operated. We are known for our elite personal protection training and producing best dogs. We pride ourselves on producing healthy, athletic, and functional dogs with great temperaments for protection as well as family companions.</p>
                    </div>
                    <hr />
                    <div className="info" data-aos="fade-up">
                        <h2>Information</h2>
                        <ul>
                            <li><i class="fa-solid fa-location-dot"></i>East coast road chennai-600654</li>
                            <li><a href="#"><i className='fa fa-envelope'></i>onlydogs123@gmail.com</a></li>
                            <li><i className='fa fa-mobile'></i>+91 9678352436</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="social" data-aos="fade-left">
                        <h2>Quick links</h2>
                        <div className="foot-link">
                            <li><a href="#" ><i className='fa-brands fa-facebook' title='Facebook'></i></a></li>
                            <li><a href="#" ><i className='fa-brands fa-instagram' title='Instagram'></i></a></li>
                            <li><a href="#" ><i className='fa-brands fa-x-twitter' title='X/Twitter'></i></a></li>
                            <li><a href="#" ><i className='fa-brands fa-google-plus-g' title='Google+'></i></a></li>
                            <li><a href="#" ><i className='fa-brands fa-youtube' title='Youtube'></i></a></li>
                        </div>
                    </div>
                </div>
                <h5>Developed and designed by Mahaboob </h5>
            </footer>
        </>
    )
}
