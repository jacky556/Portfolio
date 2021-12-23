import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className = "gpt3__header section__padding" id="home">
            <div className = "gpt3__header-content">
                <h1 className = "gradient__text">
                    An Independent Gaming Studio in Hong Kong
                </h1>
                <p>"Meme Defenders" is the current game project we have been working for several months.</p>
                <div className = "gpt3__header-content__input">
                    <input type = "email" placeholder = "Your Email Address"></input>
                    <button type = "button">Get Started</button>
                </div>

                <div className = "gpt3__header-content__people">
                    <img src = {people} alt = "people"/>
                    <p>1000 people requested access.</p>
                </div>
            </div>
            <div className = "gpt3__header-image">
                <img src ={ai} alt="ai"/>
            </div>     
        </div>
    )
}

export default Header