import React from 'react';
import { Element } from 'react-scroll';

const Contact_me = () => {
    return (
        <Element name='contact_me'>
            <span>Contact me</span>
            <h2>Send me a mail..</h2>
            <form>
                <input placeholder='Sert your name' />
                <input placeholder='age' />
                <input placeholder='Email' />
                <textarea placeholder='Write your mail here...'/>
            </form>
        </Element>
    );
};

export default Contact_me;