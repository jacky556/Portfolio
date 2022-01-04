import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import myicon from '../../assets/myicon.png';

const Header = () => {
    return (
        <div className = "header section__padding" id="home">
            <div className = "header-content scale-up-ver-top">
                <h1 className = "gradient__text ">
                    WELCOME, to the Portfoloio of Jacky Tse.
                </h1>
                <p className= "describe ">
                    This is a fully responsive react application.
                    If you are a PC user, go ahead to adjust the window's size!
                    <br/><br/>Also, in case you have any comment to this website, please
                    type(optional) your email-address into the below textbox and
                    click the <b span style= {{ color:"orangered" }}>ORANGERED BUTTON</b>.
                </p>
                <div className = "header-content__input">
                    <input type = "email" placeholder = "Your Email Address"></input>
                    <button type = "button">Get Started</button>
                </div>

                <div className = "header-content__people">
                    <img src = {people} alt = "people"/>
                    <p>1000 people requested access.</p>
                </div>
            </div>
            <div className = "header-image ">
                <img src ={ myicon } alt="myicon"/>
            </div>     
        </div>
    )
}

export default Header