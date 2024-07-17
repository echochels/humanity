import React from 'react';
import './Residencies.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';
import { Bounce } from 'react-awesome-reveal';


const Residencies = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container" id="residencies">
                <div className="r-head flexColStart">
                    <div className="title">
                        <h2 style={{ color: "#1A1A1A" }}>How we impact the World</h2>
                    </div>

                    {/* <span className='orangeText'>Our initiatives focus on:</span> */}

                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <Bounce>
                                    <div className="flexColStart r-card">

                                        <img src={card.image} className="slider-image" alt="home" />

                                        <span className="secondaryText r-price">
                                            <span style={{ color: "#2E8EE6" }}></span>
                                            <span style={{ color: "#1A1A1A" }}></span>
                                        </span>

                                        <span className="primaryText">{card.name}</span>
                                        <span className="secondaryText">{card.detail}</span>
                                    </div>
                                </Bounce>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Residencies;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    );
};