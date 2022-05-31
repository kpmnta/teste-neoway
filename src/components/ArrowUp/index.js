import React, {useState} from "react";
import './styles.css'
import { FaArrowAltCircleUp } from 'react-icons/fa';

const ArrowUp = ({showScroll, setShowScroll}) => {
    const checkScrollTop = () => {    
        if (!showScroll && window.pageYOffset > 400){
           setShowScroll(true)    
        } else if (showScroll && window.pageYOffset <= 400){
           setShowScroll(false)    
        }  
     };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop)
    
    return (
        <div className="container__arrow">
            <FaArrowAltCircleUp 
                className="scrollTop" 
                onClick={scrollTop} 
                style={{height: 40, display: showScroll ? 'block' : 'none'}}
            />
        </div>
    )
}

export default ArrowUp;