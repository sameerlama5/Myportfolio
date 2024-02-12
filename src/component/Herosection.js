import React, { useState } from 'react';
import Popupscontact from '../popupscontact';
import { useTypewriter } from 'react-simple-typewriter';
import Sameer from '../images/sameerlama55.png';
function Herosection () {
    const [typeEffect] = useTypewriter({
        words: ['Sameer Lama .'],
        loop: {},
        typeSpeed: 160,
        deleteSpeed: 100
    });
    const [openContact, setOpenContact] = useState(false);
        return (

         <div className="hero">
            <div className="heroContent">
            <div className="text-content">
               <h1>
                I'M <span>{typeEffect}<span className="cursor relative"/></span>
               </h1>
               <h4>FRONTEND DEVELOPER</h4>
                <button type="button" className="btn" onClick={() => setOpenContact(true)}>Contact Me</button>
                <Popupscontact
                open={openContact}
                onClose={() => setOpenContact(false)}
                />
        </div>
            <div className="Myimage">
                <img src={Sameer}/>
            </div>
            </div>
        </div>
    )
}
export default Herosection;