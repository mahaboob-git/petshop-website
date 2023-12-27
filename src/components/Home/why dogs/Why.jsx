import React from 'react'
import './why-dog.css';

export const Why = () => {
  return (
    <section className='why'>
                <h1 data-aos="fade-up">Why <span>D</span>ogs</h1>
                <div className="why-con"  >
                    <img src={require('../../assets/why2-c.jpg')} data-aos="fade-up" alt="" /> 
                    <div className="points" data-aos="fade-up">
                        <p>
                            <img src={require('../../assets/paw.png')} alt="" />
                            <span>D</span>ogs can be there for you even when people can’t. They offer unconditional love, emotional support, and constant cuddles that help stave off social isolation. <span>A</span> small Australian study discovered that dog ownership can reduce loneliness.
                            Owning a dog can help you live longer. <span>A</span> comprehensive review of studies published between 1950 and 2019 found that dog owners had a lower risk of death. <span>S</span>tudies suggest that dog owners have lower blood pressure levels and improved responses to stress.
                            <span>R</span>esearch has concluded that the bond between humans and dogs reduces stress, which is a major cause of cardiovascular problems.<a href='#'>Read more</a>
                        </p>

                    </div>
                </div>
            </section>
  )
}
