import React from 'react'
import './navbar.css'
import logo from '../../assets/StudioLogo.png'
import { useNavigate } from 'react-router-dom'


const Backendnav = () => {

    let navigate = useNavigate();


    return (
        <div className = "navbar">
            <div className = "navbar-links slide-in-left">
                <div className = "navbar-links_logo ">
                    <img src = { logo } alt = "logo" onClick={() => {navigate("/portfolio")}} />
                </div>
            </div>
        </div>
    )
}

export default Backendnav