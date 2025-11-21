import './slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { faLessThan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

function Slider() { 
    const image = ['image-1.avif', 'image-2.jpg', 'image-3.jpg', 'image-4.webp']
    const [currentimage, setcurrentimage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setcurrentimage((prevIndex) =>
                prevIndex === image.length - 1 ? 0 : prevIndex + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [])

    const nextSlide = () => {
        setcurrentimage((prevIndex) =>
            prevIndex === image.length - 1 ? 0 : prevIndex + 1);
    };

    const prevSlide = () => {
        setcurrentimage((prevIndex) =>
            prevIndex === image.length - 1 ? 0 : prevIndex - 1);
    };
    return (
        <>
            <div className="sliders">
                <img src={image[currentimage]} alt="Slider" />
                <div className="slider-buttons">
                    <button onClick={prevSlide}><FontAwesomeIcon icon={faLessThan} /></button>
                    <button onClick={nextSlide}><FontAwesomeIcon icon={faGreaterThan} /></button>
                </div>
            </div>
        </>
    )
}

export default Slider
