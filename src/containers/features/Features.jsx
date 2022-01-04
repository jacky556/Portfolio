import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
    {
        title: "Casual First",
        text: "Studio is currenly building up, my friend."
    },
    {
        title: "Casual Second",
        text: "Studio is currenly building up, my friend."
    },
    {
        title: "Casual Third",
        text: "Studio is currenly building up, my friend."
    },
    {
        title: "Casual Fourth",
        text: "Studio is currenly building up, my friend."
    }
]

const Features = () => {
    return (
        <div className="features section__padding" id="features">
            <div className="features-heading">
                <h1 className="gradient__text">See me Or don't see me. See me Or don't see me. See me Or don't see me.</h1>
                <p>qweqweqweqweqweqw</p>
            </div>
            <div className="features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text = {item.text} key = {item.title + index}/>
                ))}
            </div>
        </div>
    )
}

export default Features