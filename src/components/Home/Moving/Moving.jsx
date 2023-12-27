import React from 'react';
import '../Moving/movingstyle.css';
import Marquee from 'react-fast-marquee';

export const Moving = () => {
    return (
        <div className="main-media-container">
        <div className='main-media'>
            <h1 data-aos="fade-up">Our <span>S</span>ocial Media Links</h1>
            <Marquee pauseOnHover speed={80}>
                <div className="media">
                    <img src={require('/Users/ELCOT/reactproject/OnlyDogs/src/components/assets/facebook.png')} alt="" className='facebook' />
                    <a href="#"><h2>Facebook</h2></a>
                </div>
                <div className="media">
                    <img src={require('/Users/ELCOT/reactproject/OnlyDogs/src/components/assets/youtube.png')} alt="" className='youtube' />
                   <a href="#"> <h2>YouTube</h2></a>
                </div>
                <div className="media">
                    <img src={require('/Users/ELCOT/reactproject/OnlyDogs/src/components/assets/x2-png.png')} alt="" className='x' />
                    <a href="#"><h2>X/Twitter</h2></a>
                </div>
                <div className="media">
                    <img src={require('/Users/ELCOT/reactproject/OnlyDogs/src/components/assets/insta.png')} alt="" className='insta' />
                   <a href="#"> <h2>Instagram</h2></a>
                </div>
            </Marquee>
        </div>
        </div>
    )
}
