import React from 'react'
import { Feature } from '../../components'
import './structure.css'

const Structure = () => {
    return (
        <div className="structure section__margin" id ="structure">
            <div className="structure-feature">
                <Feature title="Website Structure" 
                text = {<div><p>Currently, this react website has a <span className='gradient__text'><strong>fully responsive</strong></span> front-end design which compatible to different 
                    devices.<br/>The body consist <span className='gradient__text'>gradient texts</span>, images and backgrounds.<br/> 
                    It also involves <span className="vibrate-1">ANIMATIONS</span> for some of the components and containers.<br/> 
                    <strong className='gradient__text'> Smooth Scrolling </strong>is also applied in here.<br/>A 
                    <strong className='gradient__text'> Gallery </strong>to show my arts and current project is created.<br/>
                    Last but not least, a emgister page is created and linked with useRoute. This page is also running as a back-end application
                    for managing emails in the <strong className='gradient__text'>Cloud Firestore</strong>.</p></div>}/>
            </div>

            <div className="structure-heading">
                <h1 className="gradient__text">Project Brief Introduction</h1>
                <p><a href = "#about">Explore more about <strong>ME</strong></a></p>
            </div>

            <div className="structure-container">
                <Feature title="React-Structure" text={
                    <div>
                        <h3><strong><u><span className='gradient__text'>ASSETS</span></u></strong></h3>
                        <p>For most of the images used.</p>
                        <h3><strong><u><span className='gradient__text'>COMPONENTS</span></u></strong></h3>
                        <p>For all website components which possibly be used for multiple times such as articles, features and slider gallery.</p>
                        <p>Also <strong>included Backend-Systems.</strong></p>
                        <h3><strong><u><span className='gradient__text'>Additional Credit</span></u></strong></h3>
                        <p>The whole structure is credited to the youtube video 'Build and Deploy a Fully Responsive Modern UI/UX Website in React JS'.</p>
                    </div>
                }/>
                <Feature title="Animations & Graphics" 
                text = {<div>
                    <p><strong><span className='gradient__text'>1.</span> CSS TRANSITIONS</strong></p>
                    <p><strong><span className='gradient__text'>2.</span> SMOOTH SCROLLING</strong></p>
                    <p><strong><span className='gradient__text'>3.</span> ANIMATE ON SCROLL(Aos)</strong></p>
                    <p><strong><span className='gradient__text'>4.</span> Self Pixel-Drwaings</strong></p>
                    <p><strong><span className='gradient__text'>5.</span> Window Video Clip</strong></p>
                    <p>The mentioned are responsible for the animations of texts, different components and containers.</p>
                </div>}/>
                <Feature title="Email Register System" 
                text ={ <div>
                    <p><strong><u>Version 1(Cloud Firestore)</u></strong></p>
                    <p><span className='gradient__text'>1.</span> Basic CRWD with remote devices.</p>
                    <p><span className='gradient__text'>2.</span> Auto-update List & Auto-generated ID & Auto-increment of user's number in database.</p>
                    <p><span className='gradient__text'>3.</span> Query Operations</p>
                    <p><span className='gradient__text'>4.</span> Customization of data sorting.</p>
                    <p><span className='gradient__text'>5.</span> API key could not be hid due to plan restriction</p>
                    <p><strong><u>Version 2(MySQL Localhost)</u></strong></p>
                    <p><span className='gradient__text'>1.</span> Basic CRWD with local network.</p>
                    <p><span className='gradient__text'>2.</span> Auto-update List & Auto-increment ID in database.</p>
                    <p><span className='gradient__text'>3.</span> Query Operations</p>
                    <p><span className='gradient__text'>4.</span> Shows half of the RESTful development, as the system uses only Axios with Post & Get to perform all CRUD functions.</p>
                    <p><span className='gradient__text'>5.</span> API key could be hid by dotnev</p>
                </div>}/>
            </div>
        </div>
    )
}

export default Structure;