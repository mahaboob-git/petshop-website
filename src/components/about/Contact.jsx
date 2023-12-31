import React from 'react';
import '../about/contactstyle.css';

export const Contact = () => {
  return (
    <section className='contact-us'>
      <h1 data-aos="fade-up"><span>C</span>ontact us</h1>
      <div className="contact-con">
        <h2 data-aos="fade-up">RESERVE YOUR NEW PUPPY OR BOOK TRAINING</h2>
        <p data-aos="fade-up">Our babies are adopted quickly and we have a wait list for training so reach out to us TODAY to ask any questions and get started!
          few breeds are quickly growing breed in popularity so please be aware of scammers. If it seems too good to be true it probably is! There are more and more scam dog breeders popping up so if you are unsure about something don't hesitate to reach out to us to ask! </p>
        <h2 data-aos="fade-up">Only<span>Dogs</span></h2>
        <h4 data-aos="fade-up">East Coast Road, India</h4>
        <h5 data-aos="fade-up">Phone:98763-54216<br />
          Email: onlydogs123@gmail.com</h5>
      </div>
      <img src={require('../assets/footer-png.png')} alt="" data-aos="fade-up" />
      <div className="sign-up">
        <h2 data-aos="fade-up">Sign Up For Updates</h2>
        <form data-aos="fade-up">
          <input type="text" placeholder='Email' />
          <button>SIGN UP</button>
        </form>
      </div>
    </section>
  )
}
