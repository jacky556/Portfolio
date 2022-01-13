import React, { useState } from 'react'
import './header.css'
import myicon from '../../assets/myicon.png';



const Header = () => {

    return (
        <div className = "header section__padding" id="home">
            <div className = "header-content scale-up-ver-top">
                <h1 className = "gradient__text ">
                    WELCOME, to the Portfoloio of Jacky Tse.
                </h1>
                <p className= "describe">
                    This is a fully responsive react application.
                    Go ahead to adjust your device's window!
                    <br/><br/>Press the <strong>REGISTER</strong> button to check my email system in-progress!
                </p>
            </div>
            <div className = "header-image ">
                <img src ={ myicon } alt="myicon"/>
            </div>     
        </div>
    )
}

export default Header