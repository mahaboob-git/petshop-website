import React from 'react';
import '../about/aboutstyle.css';
import { Moving } from '../Home/Moving/Moving';
import { Contact } from './Contact';



export const About = () => {
  return (
    <>
      <section className="main-about">
        <div className="about-why">
          <h1 data-aos="fade-up">About Only<span>Dogs</span> Kennel</h1>
          <div className="why-container">
            <div className="why-content">
              <img src={require('../assets/best.png')} alt="" data-aos="fade-up" />
              <h2 data-aos="fade-up">Best dog Breeders</h2>
              <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, natus magni blanditiis quae, commodi veniam deleniti earum, explicabo corrupti temporibus distinctio dolores.
                Magnam ut officiis error minima natus, possimus culpa! <a href="#">Read more</a></p>
            </div>
            <div className="why-content">
              <img src={require('../assets/guidence.png')} alt="" data-aos="fade-up" />
              <h2 data-aos="fade-up">Life time Guidence</h2>
              <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, natus magni blanditiis quae, commodi veniam deleniti earum, explicabo corrupti temporibus distinctio dolores.
                Magnam ut officiis error minima natus, possimus culpa! <a href="#">Read more</a></p>
            </div>
            <div className="why-content">
              <img src={require('../assets/247.png')} alt="" data-aos="fade-up" />
              <h2 data-aos="fade-up">24/7 Customer support</h2>
              <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, natus magni blanditiis quae, commodi veniam deleniti earum, explicabo corrupti temporibus distinctio dolores.
                Magnam ut officiis error minima natus, possimus culpa! <a href="#">Read more</a></p>
            </div>
            
            <div className="why-content">
              <img src={require('../assets/delivery.png')} alt="" data-aos="fade-up" />
              <h2 data-aos="fade-up">We deliver everywhere</h2>
              <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, natus magni blanditiis quae, commodi veniam deleniti earum, explicabo corrupti temporibus distinctio dolores.
                Magnam ut officiis error minima natus, possimus culpa! <a href="#">Read more</a></p>
            </div>
          </div>
        </div>
      </section>

      <section className='about-more'>
        <div className="expertise">
          <img src={require('../assets/expertise-c.jpg')} alt="" data-aos="fade-up" />
          <div className="exp-content">
            <h1 data-aos="fade-up">OUR <span>EXPERTISE</span></h1>
            <p data-aos="fade-up">OnlyDogs is family owned and operated. We are known for our elite personal protection training and producing best dogs. We pride ourselves on producing healthy, athletic, and functional dogs with great temperaments for protection as well as family companions.</p>
          </div>
        </div>

        <div className="expertise-2">
          <div className="exp-content">
            <h1 data-aos="fade-up">OUR <span>COMMITMENT</span></h1>
            <p data-aos="fade-up">We are committed to providing the best possible care for our dogs. Our puppies are raised in a loving and nurturing environment, and we work closely with new owners to ensure that they have all the information and support they need to provide the best possible care for their new puppy.</p>
          </div>
          <img src={require('../assets/commitment.jpg')} alt="" data-aos="fade-up" />
        </div>

        <div className="expertise">
          <img src={require('../assets/standards-c.jpg')} alt="" data-aos="fade-up" />
          <div className="exp-content">
            <h1 data-aos="fade-up">OUR <span>STANDARDS</span></h1>
            <p data-aos="fade-up">We adhere to the highest standards when it comes to breeding. We only breed healthy, functional dogs with best possible temperaments for family companions and protectors. We follow strict guidelines to ensure that our facilities and breeding practices are ethical and responsible. We understand our best puppies are extremely sought after and take our screening process very seriously to ensure our puppies go to the best homes possible.</p>
          </div>
        </div>
      </section>

      <Contact/>
      <Moving/>

    </>
  )
}
