import React from 'react';
import { Link } from 'react-router-dom';
import './topstyle.css';


export const Top = () => {
  return (
    <section className='top'>
                <h1 data-aos="fade-up">Top <span>s</span>elling Breeds</h1>
                <div className="top-sale" data-aos="fade-up" >
                    <div className="top-content" >
                          <img src={require('/Users/ELCOT/reactproject/OnlyDogs/src/components/assets/french-b.jpg')} alt="" /> 
                        <h3 data-aos="fade-up">French bulldog</h3>
                        <p>The French Bulldog is a French breed of companion dog or toy dog.<br/>
                            <b>Life span: 10-12 years <br/> Temperment: Playful,Bright,Lively</b>
                        </p>
                        <Link to='/product' >Enquire Now</Link>
                    </div>
                    <div className="top-content" >
                         <img src={require('/Users/ELCOT/reactproject/OnlyDogs/src/components/assets/lab1-c.jpg')} alt="" /> 
                        <h3 data-aos="fade-up">Labrador retriever</h3>
                        <p data-aos="fade-up">The Labrador retriever is a British breed of retriver gun dog.<br/>
                            <b>Life span: 10-12 years <br/> Temperment: Friendly,Even Tempered,Intelligent</b>
                        </p>
                        <Link to='/product' >Enquire Now</Link>
                    </div>
                    <div className="top-content" >
                        <img src={require('/Users/ELCOT/reactproject/OnlyDogs/src/components/assets/golden-c.jpg')} alt="" /> 
                        <h3 data-aos="fade-up">Golden retriever</h3>
                        <p data-aos="fade-up">The Golden Retriver is a scottish breed of retriver dog of medium size.<br/>
                            <b>Life span: 10-12 years <br/> Temperment: Friendly,Kind,Intelligent</b>
                        </p>
                        <Link to='/product' >Enquire Now</Link>
                    </div>
                </div>
            </section>

  )
}
