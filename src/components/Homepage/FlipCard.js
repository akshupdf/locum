import React, { useEffect, useRef } from 'react';
import one from "../../assets/dr2.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import { LeftArrow, LeftArrowv2, RightArrowv2 } from '../../reusable/Icons';


export const Flipcard = () => {

    const containerRef = useRef(null);
  const contentWidth = 300; 

    const drData = [
        {
            id: 1,
            title: "Dr Kiran S.",
            role: "Consultant - Anaesthetics",
            logo: one,
            location: "Mumbai",
            available: "Available Now",
            shift: "20 shifts / month",
            pay: "$100 / hour",
        },
        {
            id: 2,
            title: "Dr Jamie M.",
            role: "Registrar - Acute Medicine",
            logo: one,
            location: "Mumbai",
            available: "Available Now",
            shift: "20 shifts / month",
            pay: "$100 / hour",
        },
        {
            id: 3,
            title: "Dr Maria C.",
            role: "SHO - Emergency Medicine",
            logo: one,
            location: "Mumbai",
            available: "Available Now",
            shift: "20 shifts / month",
            pay: "$100 / hour",
        },
        {
            id: 4,
            title: "Dr Kiran S.",
            role: "Consultant - Anaesthetics",
            logo: one,
            location: "Mumbai",
            available: "Available Now",
            shift: "20 shifts / month",
            pay: "$100 / hour",
        },
        {
            id: 5,
            title: "Dr Jamie M.",
            role: "Registrar - Acute Medicine",
            logo: one,
            location: "Mumbai",
            available: "Available Now",
            shift: "20 shifts / month",
            pay: "$100 / hour",
        },
        {
            id: 6,
            title: "Dr Maria C.",
            role: "SHO - Emergency Medicine",
            logo: one,
            location: "Mumbai",
            available: "Available Now",
            shift: "20 shifts / month",
            pay: "$100 / hour",
        },
    ];

    const scrollLeft = () => {
        if (containerRef.current) {
            const { scrollLeft } = containerRef.current;
            if (scrollLeft === 0) {
                containerRef.current.scrollTo({ left: contentWidth * drData.length, behavior: 'smooth' });
            } else {
                containerRef.current.scrollBy({ left: -contentWidth, behavior: 'smooth' });
            }
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
            if (scrollLeft + clientWidth >= scrollWidth) {
                containerRef.current.scrollTo({ left: contentWidth, behavior: 'smooth' });
            } else {
                containerRef.current.scrollBy({ left: contentWidth, behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.scrollTo({ left: contentWidth, behavior: 'auto' });

        const handleScroll = () => {
            const { scrollLeft, clientWidth, scrollWidth } = container;

            if (scrollLeft <= 0) {
                container.scrollLeft = scrollWidth - 2 * contentWidth;
            } else if (scrollLeft + clientWidth >= scrollWidth) {
                container.scrollLeft = contentWidth;
            }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [contentWidth]);

    return (
        <div className='flipcard-slider'>
            <button className="slider-arrow left-arrow"  onClick={scrollLeft}><LeftArrowv2 /></button>
            <div  className='swiper-container'>
                <div className='swiper-wrapper'  ref={containerRef} >
                    {drData.map((data) => (
                        <div key={data.id} className="swiper-slide"  style={{ minWidth: contentWidth }} >
                            <div className="tool-small-box">
                                <div className="front">
                                    <img src={data.logo} alt="logo" />
                                    <div className="tool-small-box-text">
                                        <h4>{data.title}</h4>
                                        <h3>{data.role}</h3>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="tool-small-box-text">
                                        <p>📍{data.location}</p>
                                        <p>✅{data.available}</p>
                                        <p>🕓{data.shift}</p>
                                        <p>💰{data.pay}</p>
                                    </div>
                                    <button className="tool-box-btn" onClick={() => (window.location.href = `/profile/${data.id}`)}>
                                        VIEW PROFILE <LeftArrow />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="slider-arrow right-arrow"  onClick={scrollRight}><RightArrowv2 /></button>
        </div>
    );
};
