import React, { useState, useEffect } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/StudioLogo.png'
import { useNavigate } from 'react-router-dom'

const Menu = () =>(
    <>
    <p><a href = "#home">Home</a></p>
    <p><a href = "#structure">Website Structure</a></p>
    <p><a href = "#about">About Me</a></p>
    <p><a href = "#flipit">Flip it</a></p>
    <p><a href = "#links">Social Links</a></p>
    </>
)

const Navbar = () => {

    let navigate = useNavigate();

    const [toggleMenu, setToggleMenu] = useState(false);


    const [show, setShow] = useState(false)
    const [prevpos, setPrevpos] = useState(window.pageYOffset);

    const controlNavbar = () => {
        let curpos = window.pageYOffset;
        if (curpos > prevpos) {
            setShow(true)
            setToggleMenu(false)
        } else {
            setShow(false)
            
        }
        setPrevpos(curpos);
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    })


    return (
        <div className = {`navbar ${show && "navbar_o"}`}>
            <div className = "navbar-links slide-in-left">
                <div className = "navbar-links_logo ">
                    <img src = { logo } alt = "logo" onClick={() => {navigate("/portfolio")}} />
                </div>
                <div className = "navbar-links_container">
                   <Menu />
                </div>
            </div>
            <div className = "navbar-sign">
                <button type = "button" onClick={() => {
                    navigate("/Email");
                }}>REGISTER</button>
            </div>
            <div className = "navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color = "#fff" size = {27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color = "#fff" size = {27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu &&(
                    <div className = "navbar-menu_container bounce-in-top">
                        <div className = "navbar-menu_container-links">
                            <Menu />
                            <div className = "navbar-menu_container-links-sign">
                                <button type = "button">REGISTER</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar