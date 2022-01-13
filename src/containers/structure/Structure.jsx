import React from 'react'
import { Feature } from '../../components'
import './structure.css'

const Structure = () => {
    return (
        <div className="structure section__margin" id ="structure">
            <div className="structure-feature">
                <Feature title="Website Structure" 
                text = {<div><p>Currently, this react website has a<strong className='gradient__text'> fully responsive </strong>front-end design which compatible to different 
                    devices.<br/>The body consist <strong className='gradient__text'>gradient texts, images and backgrounds</strong>.<br/> 
                    It also involves <span className="vibrate-1">ANIMATIONS</span> for some of the components and containers.<br/> 
                    <strong className='gradient__text'> Smooth Scrolling </strong>is also applied in here.<br/>A 
                    <strong className='gradient__text'> Gallery </strong>to show my arts and current project is created.<br/>
                    Last but not least, a email register page is created and linked with useRoute. This page is also running as a back-end application
                    for managing emails in the local host mySQL database.</p></div>}/>
            </div>

            <div className="structure-heading">
                <h1 className="gradient__text">Project Brief Introduction</h1>
                <p><a href = "#about">Explore more about <strong>ME</strong></a></p>
            </div>

            <div className="structure-container">
                <Feature title="React-Structure" text="ASSETS for most of the images used. COMPONENTS for all website components which possibly be 
                used for multiple times such as articles, features and slider gallery. CONTAINERS for all website sections. The whole structure
                is credited to the youtube video 'Build and Deploy a Fully Responsive Modern UI/UX Website in React JS'."/>
                <Feature title="Animations & Graphics" text="CSS TRANSITIONS, SMOOTH SCROLLING, ANIMATE ON SCROLL(Aos) are used to perform animations of this
                website. The mentions are responsible for the animations of texts, different components and containers. All graphics and gif used in the gallery are created by my own. The pixel drawings are proposed to
                be deployed as characters' icons in my gaming project which has shown in the gallery gif. However, the project is currently on UI design
                only. Please look forward to its completion."/>
                <Feature title="Email Register System" text="Version 1(Firebase). 1. basic CRWD with remote devices. 2. Auto-update List & Auto-increment ID in database. 3. Query Operations 4. Customization of data sorting."/>
            </div>
        </div>
    )
}

export default Structure;