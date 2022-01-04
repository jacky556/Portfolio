import React from 'react'
import './footer.css'
import logo from '../../assets/StudioLogo.png'

const Footer = () => {
    return (
        <div className="footer section__padding">
            <div className="footer-heading">
                <h1>Thank you for visiting!</h1>
            </div>
            <div className="footer-btn">
                <a href="#home"><p>Back to home</p></a>
            </div>

            <div className="footer-links">
                <div className="footer-links_logo">
                    <a href='#home'><img src= {logo} alt="logo" /></a>
                </div>
                <div className="footer-links_div">
                    <h4>Links</h4>
                    <a href='#links'><p>Linkedin</p></a>
                    <a href='#links'><p>Facebook</p></a>
                    <a href='#links'><p>Instagram</p></a>
                    <a href='#links'><p>Github</p></a>                    
                </div>
                <div className="footer-links_div">
                    <h4>Get in touch</h4>
                    <p>On Tat Estate, Sau Mau Ping, Kwun Tong</p>
                    <p>+852-92338312</p>
                    <p>formal556@gmail.com</p>                    
                </div>
            </div>

            <div className="footer-copyright">
                <p> 2021 Casual Studio. All rights reserved.</p>
            </div>


        </div>
    )
}

export default Footer