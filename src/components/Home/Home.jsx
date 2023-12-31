import React from 'react';
import { Link } from 'react-router-dom'
import '../Home/homestyle.css';
import { Why } from './why dogs/Why';
import { Top } from './top/Top';
import { Quick } from './quick/Quick';
import { Moving } from './Moving/Moving';

export const Home = () => {

    return (
        <>
            <section className="home" id='home'>
                <div className="home-content">
                    <h1 data-aos="fade-up">Dog Lovers Paradise</h1>
                    <p data-aos="fade-up">OnlyDogs is family owned and operated. We are known for our elite personal protection training and producing best dogs. We pride ourselves on producing healthy, athletic, and functional dogs with great temperaments for protection as well as family companions.</p>
                    <Link to='/product' className='home-btn'>See Available Puppies</Link>
                </div>
            </section>
            <Why />
            <Top />
            <Quick />
            <Moving />

        </>
    )
}
