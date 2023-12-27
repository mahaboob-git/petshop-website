import React from 'react';
import '../faq/faqstyle.css';
import { Accordion } from 'react-bootstrap';
import Typed from 'react-typed';

export const Faq = () => {
  return (

    <section className='faq-container'>
      <div className="faq">
        <h1 data-aos="fade-up">Frequently <span className='first'>A</span>sked questions, <span className='second'>
          <Typed strings={['PUPPIES']}
            typeSpeed={50}
            backSpeed={100}
            backDelay={1000}
            showCursor={false}
            loop
          />
        </span></h1>
        <p data-aos="fade-up">Please reach us if you cannot find an answer to your question.</p>
        <Accordion className='acc' data-aos="fade-up">
          <Accordion.Item eventKey='0' className='item' data-aos="fade-up">
            <Accordion.Header className='acc-head'>What breed do you specialize in?</Accordion.Header>
            <Accordion.Body>We breed all type of dogs, we are specialize in Lab's and Husky's</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1' className='item' data-aos="fade-up">
            <Accordion.Header className='acc-head'>What are 'quality' when referring to puppies?</Accordion.Header>
            <Accordion.Body>Our puppies are sold as "quality", what this means is that the biggest and best looking male of the litter would be considered 1st quality male and would be the most expensive. The biggest and best looking female would be 1st quality female and it goes down from there.
              Our puppies are sold as "quality", what this means is that the biggest and best looking male (and female) of the litter would be considered 1st quality male and female and would be the most expensive puppies, prices would go down from there.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2' className='item' data-aos="fade-up">
            <Accordion.Header className='acc-head'>What are your prices for puppies?</Accordion.Header>
            <Accordion.Body>Our puppies usually range from about ₹4000-₹2,50,000. On occasion we may have some starting less so please reach out directly for serious inquiries.We also offer flexible payment arrangements for the right homes!</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3' className='item' data-aos="fade-up">
            <Accordion.Header className='acc-head'>How can i reserve a puppy?</Accordion.Header>
            <Accordion.Body>The first step is screening to make sure you're a good home. Next step is signing the contract.
              Last is a 50% deposit and the remaining is due when the pups turn 5 weeks old or before they are ready to ship. (This does not apply to people in payment arrangements.)</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='4' className='item' data-aos="fade-up">
            <Accordion.Header className='acc-head'>How do i get a puppy when i live in another country/state?</Accordion.Header>
            <Accordion.Body>We can ship our puppies worldwide (wherever the breed is legal). We also have franchises in other states and countries that may be more conveniently located for you.We also allow people to pick up in person if they choose to do so, we just meet somewhere public for the exchange.</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="faq">
        <h1 data-aos="fade-up">Frequently <span className='first'>A</span>sked questions, <span className='second'>
          <Typed strings={['TRAINING']}
            typeSpeed={50}
            backSpeed={100}
            backDelay={1000}
            showCursor={false}
            loop />
        </span></h1>
        <p data-aos="fade-up">Please reach us if you cannot find an answer to your question.</p>
        <Accordion className='acc' data-aos="fade-up">
          <Accordion.Item eventKey='0' className='item' data-aos="fade-up">
            <Accordion.Header className='acc-head'>Do you train all breeds of dog?</Accordion.Header>
            <Accordion.Body>We can train any breed depending on the type of training you would like done and if your dog has the correct temperament for it.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1' className='item' data-aos="fade-up">
            <Accordion.Header className='acc-head'>What type of training do you prefer?</Accordion.Header>
            <Accordion.Body>We offer anything from basic on leash obedience to executive personal and home protection.We also offer behavior modification for locals.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2' className='item' data-aos="fade-up">
            <Accordion.Header className='acc-head'>What are your prices for training?</Accordion.Header>
            <Accordion.Body>On leash obedience ₹20,000,Off leash obedience ₹25,000
              Security and on leash obedience ₹25,000
              Security and off leash obedience ₹30,000
              Personal protection to executive home and family protection ranges from ₹50,000-₹100,000
              We take a 50% deposit to begin and the remaining amount is due at the end of training. A handlers course will also be included.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3' className='item' data-aos="fade-up">
            <Accordion.Header className='acc-head'>Will i get to be involved in the training?</Accordion.Header>
            <Accordion.Body>Training is done as a board and trains so you can either drop your dog off or have him/her shipped. You will not be a part of training unless we are under a protection contract in which case we will have scheduled visits for involvement. Board and trains means distance is no issue and your dog can receive the best training and care no matter where you're located. </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='4' className='item' data-aos="fade-up">
            <Accordion.Header className='acc-head'>Can i purchase a pre trained dog?</Accordion.Header>
            <Accordion.Body>We do occasionally we have some adults that have some obedience training available for adoption. If you'd like a dog for protection we do not have them pre trained and ready to go. We train very specific for each persons needs and lifestyle so we choose a puppy that will best suit what you're looking for and go from there.</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="faq">
        <h1 data-aos="fade-up">Frequently <span className='first'>A</span>sked questions, <span className='second'>
          <Typed strings={['OTHERS']}
            typeSpeed={50}
            backSpeed={100}
            backDelay={1000}
            showCursor={false}
            loop />
        </span></h1>
        <p data-aos="fade-up">Please reach us if you cannot find an answer to your question.</p>
        <Accordion className='acc' data-aos="fade-up">
          <Accordion.Item eventKey='0' className='item' data-aos="fade-up">
            <Accordion.Header className='acc-head'>What do you feed your dogs?</Accordion.Header>
            <Accordion.Body>We feed various type of foods according to the breed and the age of the dog</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1' className='item' data-aos="fade-up">
            <Accordion.Header className='acc-head'>Do you stud your dogs out?</Accordion.Header>
            <Accordion.Body>Our boys are available for public stud to pre approved females. We do close them to the public during certain times though contact us today to get locked in asap.Some dogs are permanently closed to the public.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2' className='item' data-aos="fade-up">
            <Accordion.Header className='acc-head'>Do you take in owner surrenders?</Accordion.Header>
            <Accordion.Body>For the safety of our dogs and puppies we do not take in surrenders. We are working towards opening a shelter in the near future so keep checking back!</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3' className='item' data-aos="fade-up">
            <Accordion.Header className='acc-head'>Do you allow visitors/tours of your facility?</Accordion.Header>
            <Accordion.Body>Because our dogs are apart of our family in our home, we do not allow visitors or offer tours. We appreciate our privacy as well as peace of mind that no contagious diseases or illnesses are being tracked into our yard.</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>

  )
}
