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
                    <br/><br/>The below function is still working on progress. Please look forward!
                </p>
                <div className = "header-content__input">
                    <input type = "email" placeholder = "This function is Coming Soon!"></input>
                    <button type = "button">N.A.</button>
                </div>
            </div>
            <div className = "header-image ">
                <img src ={ myicon } alt="myicon"/>
            </div>     
        </div>
    )
}

export default Header