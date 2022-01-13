import React, { useEffect } from 'react';
import './Main.css';
import Aos from "aos";
import "aos/dist/aos.css";

import { Footer, Links, About, Header, Structure } from '../containers';
import { CTA, Navbar } from '../components';

//git add .
//git commit -m "update"
//npm run deploy
//git push -u origin master

const Main = () => {

    useEffect(() =>{
        Aos.init({
            duration:1000
        });
    }, []);

    return (
        <div className = "gradient__bg">
            <Navbar/>
            <Header />
            <div data-aos = "fade-right"><Structure /></div>
            <div data-aos = "slide-right"><About /></div>
            <div data-aos = "fade-down-right"><CTA /></div>
            <div data-aos = "fade"><Links /></div>
            <div><Footer /></div>
        </div>
    )
}

export default Main
