import React, {useState} from 'react'
import './cta.css';

const CTA = () => {

    const [animate, setAnimate] = useState(false)

    const startAnimation = () =>{
        setAnimate(true)
    }

    const endAnimation = () =>{
        setAnimate(false)
    }

    return (
        <div className = {animate ?"cta flip-horizontal-bottom" :"cta"} onAnimationEnd={endAnimation} id = "flipit" >
            <div className="cta-content" >
                <p>This is actually just an animated block.</p>
                <h3>But you can click on the button to flip this block!</h3>
            </div>
            <div className="cta-btn">
                <button type = "button" onClick={startAnimation}>Get Started</button>
            </div>
        </div>
    )
}

export default CTA