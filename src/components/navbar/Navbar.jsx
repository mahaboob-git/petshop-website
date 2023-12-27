import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../navbar/navbarstyle.css';

export const Navbar = () => {
    let [click, setclick] = useState(false);
    let [toggle, settoggle] = useState(false);
    let handleclick = () => setclick(!click);
    let navclick = () => settoggle(!toggle);
    let [issticky, setsticky] = useState(false);
    let colorchange = () => {
        if (window.scrollY > 90) {
            setsticky(true)
        }
        else {
            setsticky(false)
        }
    }
    window.addEventListener('scroll', colorchange);
    return (
        <>
            <header className={issticky ? 'header header-bg' : 'header'} >
                <div className="navlogo">
                    <h1>Only<span>Dogs</span></h1>
                </div>
                <div className="navlinks" onClick={navclick}>
                    <ul className={click ? "active" : ".navlinks"} >                      
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/about'>ABOUT US</Link></li>
                        <li><Link to="/product">AVAILABLE PUPPIES</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                    </ul>
                </div>
                <div className="mobile" onClick={handleclick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </header>         
        </>
    )
}
