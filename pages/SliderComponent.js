import { useState, useEffect } from 'react';
import Image from 'next/image';
import style from '../styles/Slider.module.css';

const images = [
    '/images/image_slider_1.jpg',
    '/images/image_slider_2.jpg',
    '/images/image_slider_3.jpg',
    '/images/image_slider_4.jpg',
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide) =>
                currentSlide === images.length - 1 ? 0 : currentSlide + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
        className={style.slider_container}>
            {images.map((image, index) => (
                <div
                key={index}
                className={`${style.slide} ${index === currentSlide ? style.active : ''}`}>
                    <Image
                        src = {image}
                        fill
                        alt={`Slide ${index + 1}`}
                    />
                </div>
            ))}
            <div className={style.container_bubble}>
                {images.map((image, index) => (
                    <div key={index} className={`${style.bubble} ${index === currentSlide ? style.active : ''}`}></div>
                ))}
            </div>
        </div>
    );
}

export default Slider;