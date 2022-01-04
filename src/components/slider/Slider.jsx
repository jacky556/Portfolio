import React, { useState} from 'react'
import './slider.css'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'

const Slider = () => {

    const[slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () =>{
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex+1)
        }
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () =>{
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if ( slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }


    return (
            <div className='container-slider'>
                {dataSlider.map((obj, index) =>{
                    return(
                        <div className={slideIndex === index + 1 ?"slide active-anim" :"slide"} key={obj.id}>
                            <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}${slideIndex === 1 ?".gif" :".png"}`} 
                            alt=' '
                            className={`${slideIndex === 1 ?"gifposition" :""}`}/>
                        </div>
                    )
                })}

                <BtnSlider moveSlide={nextSlide} direction={"next"}/>
                <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

                <div className="container-dots">
                    {Array.from({length: dataSlider.length}).map((item,index) => (
                        <div className={slideIndex === index+1 ? "dot active" : "dot"}
                        //trigger only when on click
                        onClick={() => moveDot(index+1)}></div>
                    ))}
                </div>
            </div>
    )
}

export default Slider