import React from 'react'
import './about.css'
import { Slider, Feature } from '../../components'


const About = () => {

    const featuresData = [
        {
            title: "Academic Record",
            text: <p><u><strong>1. Bsc in INFORMATION MANAGEMENT</strong></u><br/>From the University of Hong Kong(2019-2021). 
                <br/><u><strong>2. ADas in MOBILE INFORMATION TECHNOLOGY</strong></u><br/>From the College of International Education(2017-2019).</p>
        },
        {
            title: "Prog. languages",
            text: <div><p><u><strong>Hands-On level</strong></u></p>
            <p><span className= "gradient__text"><strong>HTML, CSS, Javascript(React.js, Cloud FireStore, Axios),SQL(MySQL Local Host), C#(Unity with Firebase Realtime Database).</strong></span></p>
            <p><u><strong>Entry level</strong></u><br/>Python(pandas, tweepy, instapy) for social media data scraping.</p></div>
        },
        {
            title: "Other Production Tools",
            text: <p><u><strong>Experienced(For Programming)</strong></u><br/>VisualCode, Github, UnityEditor<br/>
            <u><strong>Experienced(For Production)</strong></u><br/>Microsoft Office(PPT, Word, Excel), Canva, Adobe Photoshop, Shotcut<br/>
            <u><strong>Entry level</strong></u><br/>JupyterLab, Excel VBA & Macro<br/></p>
        },
        {
            title: "Spoken Language",
            text: <p><u><strong>Native</strong></u><br/>Cantonese<br/>
            <u><strong>Fluent</strong></u><br/>English, Mandarin</p>
        }
    ]


    return (
        <div className="about section__margin" id ="about">
            
            <div className='about-content'>
                <div className='about-title'>
                    <h1 className='gradient__text'>About Tse Chun Ting</h1>
                </div>
                <div className="about-image">
                    <Slider />
                </div>
            </div>
            <div className="features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text = {item.text} key = {item.title + index}/>
                ))}
            </div>
        </div>
    )
}

export default About