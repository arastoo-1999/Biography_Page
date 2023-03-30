import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// image 
import ProfileImage from '../assets/Mypic.jpg';

// Components
import About from './About';
import Skills from './Skills';

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
        <>
            {
                open ? 
                <div onClick={OpenHandler}>
                    <div>kkkk</div>
                    <div>kkkk</div>
            <div>
                <div>
                    <img  alt='icon' />
                    <span>Home</span>
                </div>
                <div>
                    <img  alt='icon' />
                    <span>About</span>
                </div> 
                <div>
                    <img  alt='icon' />
                    <span>Performance</span>
                </div>
                <div>
                    <img alt='icon' />
                    <span>Contact me</span>
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
                <div>
                    <About />
                    <Skills />
                </div>
            </div>
        </>
    );
};

export default Main;