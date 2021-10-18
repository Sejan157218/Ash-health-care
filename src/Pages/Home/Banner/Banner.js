import React from 'react';
// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, {Pagination, Autoplay} from 'swiper';
// Swiper import end
import './Banner.css';
import img1 from "../../../Images/banner/slider1.jpg"

SwiperCore.use([Autoplay, Pagination]);




const Banner = () => {

    return (
        <div className>
            <>
                <Swiper direction={'vertical'} pagination={{
                    "clickable": true, autoplay: 50000,
                }} autoplay={{
                    "delay": 8000,
                    "disableOnInteraction": false
                }} className="banner-container">
                    <SwiperSlide>
                        <div style={{ position: 'absolute' }}>
                        <p >T-shirts</p>
                        <button>sdfsf</button>
                        <button>sdfsf</button>
                        </div>
                        <img src={img1} alt="" style={{}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ position: 'absolute' }}>
                        <p >T-shirts</p>
                        <button>sdfsf</button>
                        <button>sdfsf</button>
                        </div>
                        <img src={img1} alt="" style={{}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ position: 'absolute' }}>
                        <p >T-shirts</p>
                        <button>sdfsf</button>
                        <button>sdfsf</button>
                        </div>
                        <img src={img1} alt="" style={{}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ position: 'absolute' }}>
                        <p >T-shirts</p>
                        <button>sdfsf</button>
                        <button>sdfsf</button>
                        </div>
                        <img src={img1} alt="" style={{}} />
                    </SwiperSlide>
                </Swiper>
            </>
        </div>

    );
};

export default Banner;