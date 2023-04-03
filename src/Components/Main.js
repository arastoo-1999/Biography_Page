import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';


// image 
import ProfileImage from '../assets/Mypic.jpg';

// Components
import About from './About';
import Skills from './Skills';
import Contact_me from './Contact_me';

// Styles

const Main = () => {

    const [open, setOpen] = useState(false); 

    const OpenHandler = () => {
        if(!open) {
            setOpen(true)
        } else {
            setOpen(false);
        }
    }

    return (
        <Element name='main'>
            {
                open ? 
                <div onClick={OpenHandler}>
                    <div>kkkk</div>
                    <div>kkkk</div>
            <div>
                <div>
                    <img  alt='icon' />
                    <Link to='main' smooth={true} duration={1000}>Home</Link>
                </div>
                <div>
                    <img  alt='icon' />
                    <Link to='about' smooth={true} duration={1000}>About</Link>
                </div> 
                <div>
                    <img  alt='icon' />
                    <Link to='skills' smooth={true} duration={1000}>Skills</Link>
                </div>
                <div>
                    <img alt='icon' />
                    <Link to='contact_me' smooth={true} duration={1000}>Contact me</Link>
                </div>
            </div>
                </div>
                : 
                <div>
                    <div onClick={OpenHandler}>mmmm</div>
                    <div>mmmm</div>
                </div>
            }
            <div>
                <div>
                    <span>Intro</span>
                    <p><span>Hello i'm</span> Arastoo Afra</p>
                    <p>Front-end Developer</p>
                </div>
                <div>
                    <p>BirthDate: <span>12 July 1999</span></p>
                    <p>Languages: <span>English, Persian</span></p>
                </div>
                <div>
                    <p>Nationality: <span>Iran</span></p>
                    <p>MBTI: <span>ISTJ</span></p>
                </div>
                <img src={ProfileImage} alt="mypic" width="300px" />
                <section>
                    <About />
                <section>
                </section>
                    <Skills />
                </section>
                <section>
                    <Contact_me />
                </section>
            </div>
        </Element>
    );
};

export default Main;