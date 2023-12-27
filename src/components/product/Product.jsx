import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../product/productstyle.css';

export const Product = () => {

    //golden retriver
    const golden_in = '20,000 RS';
    const golden_usd = '240.57 USD';
    const [golden_price, setgolden_price] = useState(golden_in);
    const golden = () => {
        setgolden_price((price) => (price === golden_in ? golden_usd : golden_in))
    }
    //labrador retriver
    const lab_in = '35,000 RS';
    const lab_usd = '421.01 USD';
    const [lab_price, setlab_price] = useState(lab_in);
    const lab = () => {
        setlab_price((price) => (price === lab_in ? lab_usd : lab_in))
    }
    //french bulldog
    const french_in = '75,000 RS';
    const french_usd = '902.16 USD';
    const [french_price, setfrench_price] = useState(french_in);
    const french = () => {
        setfrench_price((price) => (price === french_in ? french_usd : french_in))
    }
    //beagle
    const beagle_in = '20,000 RS';
    const beagle_usd = '240.57 USD';
    const [beagle_price, setbeagle_price] = useState(beagle_in);
    const beagle = () => {
        setbeagle_price((price) => (price === beagle_in ? beagle_usd : beagle_in))
    }
    //poodle
    const poodle_in = '35,000 RS';
    const poodle_usd = '421.01 USD';
    const [poodle_price, setpoodle_price] = useState(poodle_in);
    const poodle = () => {
        setpoodle_price((price) => (price === poodle_in ? poodle_usd : poodle_in))
    }
    //shih
    const shih_in = '30,000 RS';
    const shih_usd = '360.88 USD';
    const [shih_price, setshih_price] = useState(shih_in);
    const shih = () => {
        setshih_price((price) => (price === shih_in ? shih_usd : shih_in))
    }
    //rottweiler
    const rott_in = '20,000 RS';
    const rott_usd = '240.57 USD';
    const [rott_price, setrott_price] = useState(rott_in);
    const rott = () => {
        setrott_price((price) => (price === rott_in ? rott_usd : rott_in))
    }
    //german shepherd
    const german_in = '19,000 RS';
    const german_usd = '228.56 USD';
    const [german_price, setgerman_price] = useState(german_in);
    const german = () => {
        setgerman_price((price) => (price === german_in ? german_usd : german_in))
    }
    //siberian husky
    const husky_in = '48,000 RS';
    const husky_usd = '577.43 USD';
    const [husky_price, sethusky_price] = useState(husky_in);
    const husky = () => {
        sethusky_price((price) => (price === husky_in ? husky_usd : husky_in))
    }
    //doberman
    const dober_in = '6,000 RS';
    const dober_usd = '72.17 USD';
    const [dober_price, setdober_price] = useState(dober_in);
    const dober = () => {
        setdober_price((price) => (price === dober_in ? dober_usd : dober_in))
    }
    //cane corso
    const cane_in = '65,000 RS';
    const cane_usd = '781.87 USD';
    const [cane_price, setcane_price] = useState(cane_in);
    const cane = () => {
        setcane_price((price) => (price === cane_in ? cane_usd : cane_in));
    }
    //great dane
    const great_in = '9,000 RS';
    const great_usd = '108.26 USD';
    const [great_price, setgreat_price] = useState(great_in);
    const great = () => {
        setgreat_price((price) => (price === great_in ? great_usd : great_in));
    }

    return (
        <>

            <div className="product-container">
                <h1 data-aos="fade-up">Choose <span>Y</span>our Adorable Puppy</h1>
                <div className="product">
                    <div className="pro-content" data-aos="fade-up">
                        <img src={require('../assets/golden-c.jpg')} alt="" />
                        <h3>Golden retriever</h3>
                        <p>The Golden Retriver is a scottish breed of retriver dog of medium size.<br/>
                            <b>Life span: 10-12 years <br/> Temperment: Friendly,Kind,Intelligent</b>
                        </p>
                        <h2>Price : {golden_price}</h2>
                        <button onClick={golden}>{`Price in ${golden_price === golden_in ? 'USD' : 'RS'}`}</button>
                        <Link to='/'>Place Order</Link>
                    </div>
                    <div className="pro-content" data-aos="fade-up">
                        <img src={require('../assets/lab1-c.jpg')} alt="" />
                        <h3>Labrador retriever</h3>
                        <p>The Labrador retriever is a British breed of retriver gun dog.<br/>
                            <b>Life span: 10-12 years <br/> Temperment: Friendly,Even Tempered,Intelligent</b>
                        </p>
                        <h2>Price : {lab_price}</h2>
                        <button onClick={lab}>{`Price in ${lab_price === lab_in ? 'USD' : 'RS'}`}</button>
                        <Link to='/'>Place Order</Link>
                    </div>
                    <div className="pro-content" data-aos="fade-up">
                        <img src={require('../assets/french-b.jpg')} alt="" />
                        <h3>French Bulldog</h3>
                        <p>The French Bulldog is a French breed of companion dog or toy dog.<br/>
                            <b>Life span: 10-12 years <br/> Temperment: Playful,Bright,Lively</b>
                        </p>
                        <h2>Price : {french_price}</h2>
                        <button onClick={french}>{`Price in ${french_price === french_in ? 'USD' : 'RS'}`}</button>
                        <Link to='/'>Place Order</Link>
                    </div>
                    <div className="pro-content" data-aos="fade-up">
                        <img src={require('../assets/beagle-c.jpg')} alt="" />
                        <h3>Beagle</h3>
                        <p>The Beagle is a breed of small scent hound, similar in appearance to the much larger foxhound.<br/>
                            <b>Life span: 10-15 years <br/> Temperment: Amiable,Even Tempered,Intelligent</b>
                        </p>
                        <h2>Price : {beagle_price}</h2>
                        <button onClick={beagle}>{`Price in ${beagle_price === beagle_in ? 'USD' : 'RS'}`}</button>
                        <Link to='/'>Place Order</Link>
                    </div>
                    <div className="pro-content" data-aos="fade-up">
                        <img src={require('../assets/poodle-c.jpg')} alt="" />
                        <h3>Poodle</h3>
                        <p>The Poodle, called the pudel in German and the Caniche in french, is a breed of water dog.<br/>
                            <b>Life span: 12-15 years <br/> Temperment: Alert,Active,Intelligent</b>
                        </p>
                        <h2>Price : {poodle_price}</h2>
                        <button onClick={poodle}>{`Price in ${poodle_price === poodle_in ? 'USD' : 'RS'}`}</button>
                        <Link to='/'>Place Order</Link>
                    </div>
                    <div className="pro-content" data-aos="fade-up">
                        <img src={require('../assets/shih-c.jpg')} alt="" />
                        <h3>Shih Tzu</h3>
                        <p>The Shih Tzu is a toy dog or pet dog breed originating form Tibet.<br/>
                            <b>Life span: 10-16 years <br/> Temperment: Playful,Clever,Affectionate</b>
                        </p>
                        <h2>Price : {shih_price}</h2>
                        <button onClick={shih}>{`Price in ${shih_price === shih_in ? 'USD' : 'RS'}`}</button>
                        <Link to='/'>Place Order</Link>
                    </div>
                    <div className="pro-content" data-aos="fade-up">
                        <img src={require('../assets/rottweiler-c.jpg')} alt="" />
                        <h3>Rottweiler</h3>
                        <p>The Rottweiler is a breed of domestic dog, regarded as medium-to-large or large.<br/>
                            <b>Life span: 8-10 years <br/> Temperment: Steady,Self-assured,Devoted</b>
                        </p>
                        <h2>Price : {rott_price}</h2>
                        <button onClick={rott}>{`Price in ${rott_price === rott_in ? 'USD' : 'RS'}`}</button>
                        <Link to='/'>Place Order</Link>
                    </div>
                    <div className="pro-content" data-aos="fade-up">
                        <img src={require('../assets/germen-c.jpg')} alt="" />
                        <h3>German Shepherd</h3>
                        <p>The German Shepherd is a German breed of working dog of medium to large size.<br/>
                            <b>Life span: 9-13 years <br/> Temperment: Stubborn,Obedient,Intelligent</b>
                        </p>
                        <h2>Price : {german_price}</h2>
                        <button onClick={german}>{`Price in ${german_price === german_in ? 'USD' : 'RS'}`}</button>
                        <Link to='/'>Place Order</Link>
                    </div>
                    <div className="pro-content" data-aos="fade-up">
                        <img src={require('../assets/husky-c.jpg')} alt="" />
                        <h3>Siberian Husky</h3>
                        <p>The Siberian Husky is a medium-sized working sled dog breed Belongs to Spitz genetic family.<br/>
                            <b>Life span: 12-15 years <br/> Temperment: Friendly,Alert,Intelligent</b>
                        </p>
                        <h2>Price : {husky_price}</h2>
                        <button onClick={husky}>{`Price in ${husky_price === husky_in ? 'USD' : 'RS'}`}</button>
                        <Link to='/'>Place Order</Link>
                    </div>
                    <div className="pro-content" data-aos="fade-up">
                        <img src={require('../assets/doberman-c.jpg')} alt="" />
                        <h3>Doberman Pinscher</h3>
                        <p>The Doberman Pinscher is a German breed of medium-large domestic dog of pinscher type.<br/>
                            <b>Life span: 10-13 years <br/> Temperment: Energetic,Alert,Intelligent</b>
                        </p>
                        <h2>Price : {dober_price}</h2>
                        <button onClick={dober}>{`Price in ${dober_price === dober_in ? 'USD' : 'RS'}`}</button>
                        <Link to='/'>Place Order</Link>
                    </div>
                    <div className="pro-content" data-aos="fade-up">
                        <img src={require('../assets/cane1.jpg')} alt="" />
                        <h3>Cane Corso</h3>
                         <p>The Cane Corso is an Italian breed of mastiff, it is usually kept as a companion or guard dog.<br/>
                            <b>Life span: 9-12 years <br/> Temperment: Stable,Alert,Intelligent</b>
                        </p>
                        <h2>Price : {cane_price}</h2>
                        <button onClick={cane}>{`Price in ${cane_price === cane_in ? 'USD' : 'RS'}`}</button>
                        <Link to='/'>Place Order</Link>
                    </div>
                    <div className="pro-content" data-aos="fade-up">
                        <img src={require('../assets/great-c.jpg')} alt="" />
                        <h3>Great Dane</h3>
                         <p>The Great Dane is a German breed of large mastiff-sighthound, one of the largest dog breed in the world.<br/>
                            <b>Life span: 8-10 years <br/> Temperment: Friendly,Devoted,Gentle</b>
                        </p>
                        <h2>Price : {great_price}</h2>
                        <button onClick={great}>{`Price in ${great_price === great_in ? 'USD' : 'RS'}`}</button>
                        <Link to='/'>Place Order</Link>
                    </div>
                </div>
            </div>

        </>
    )
}
