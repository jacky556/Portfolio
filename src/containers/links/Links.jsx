import React from 'react'
import './links.css'
import { Article } from '../../components'
import{ instagram, facebook, linkedin, github } from './images'

const Links = () => {
    return (
        <div className="links section__padding" id="links">
            <div className="links-heading">
                <h1 className="gradient__text">My social links</h1>
            </div>
            <div className="links-container">
                <div className="links-container_group">
                    <Article imgUrl={linkedin} date="LINKEDIN (public)" title="Latest Post" link="https://www.linkedin.com/in/chun-ting-tse-702a46187"/>
                    <Article imgUrl={facebook} date="FACEBOOK (public)" title="Latest Post" link="https://www.facebook.com/xie.z.ting.58/"/>
                    <Article imgUrl={instagram} date="INSTAGRAM (personal)" title="Latest Post" link="https://www.instagram.com/jack556_1999/"/>
                    <Article imgUrl={github} date="GITHUB (public)" title="Latest Post" link="https://github.com/jacky556"/>
                </div>
                
            </div>
        </div>
    )
}

export default Links