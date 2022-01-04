import React from 'react'
import './slider.css'
import left from './icons/left.svg'
import right from './icons/right.svg'


const BtnSlider = ({direction, moveSlide}) => {

    return (
        <button 
        className={direction ==="next" ? 'btn-slide next' :'btn-slide prev'} 
        onClick={moveSlide}>
            <img src={direction === "next" ? right : left} alt='button'/>
        </button>
    )
}

export default BtnSlider
