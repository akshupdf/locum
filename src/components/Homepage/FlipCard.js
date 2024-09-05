import React, { useEffect, useRef } from 'react';
import one from "../../assets/dr2.png";
import two from "../../assets/profile.png";
import three from "../../assets/3.png";
import { LeftArrow, LeftArrowv2, RightArrowv2 } from '../../reusable/Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useSelector } from 'react-redux';


export const Flipcard = () => {

    const { allUsers } = useSelector((state) => state.user);

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
            logo: two,
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
            logo: two,
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
            logo: two,
            location: "Mumbai",
            available: "Available Now",
            shift: "20 shifts / month",
            pay: "$100 / hour",
        },
    ];



    return (
        <div className='flipcard-slider'>
            {/* <button className="slider-arrow left-arrow"  onClick={scrollLeft}><LeftArrowv2 /></button>
            <div  className='swiper-container'>
                <div className='swiper-wrapper'>
                    {drData.map((data) => (
                        <div key={data.id} className="swiper-slide" >
                            <div className="tool-small-box" ref={containerRef}>
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
            <button className="slider-arrow right-arrow"  onClick={scrollRight}><RightArrowv2 /></button> */}

            <Swiper

                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                  
                    390: {
                        slidesPerView: 1,
                        spaceBetween: 100,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                      },
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 55,
                    },
                    1600: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }

                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="swiper-container">
                <div className='swiper-wrapper' >

                    {allUsers?.map((data, index) => (



                        <SwiperSlide key={index} className='swiper-slide'>
                            <div className="tool-small-box">
                                <div className="front">
                                    <img src={data?.profile_image ? data?.profile_image : two} alt="logo" />
                                    <div className="tool-small-box-text">
                                        <h4>{data?.first_name}{" "} {data?.last_name}</h4>
                                        <h3>{data?.preferred_specialities?.join(' , ')}</h3>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="tool-small-box-text">
                                        <p><span>📍</span>{data.location || "N/A"}</p>
                                        <p className='tuple-boxv2'><span>✅</span>{data.availability ? data.availability?.join(' , ') : "N/A"}</p>
                                        <p><span>🕓</span>{data.shift || "N/A"}</p>
                                        <p><span>💰</span>{data.hourly_rate && data.hourly_rate > 0 ? `₹${data.hourly_rate}` : "N/A"}</p>
                                    </div>
                                    <button className="tool-box-btn" onClick={() => (window.location.href = `/profile/${data.custom_id}`)}>
                                        VIEW PROFILE <LeftArrow />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </div>
            </Swiper>
        </div>
    );
};
