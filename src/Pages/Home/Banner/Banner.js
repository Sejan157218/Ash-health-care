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
import banner1 from "../../../Images/banner1.jpg";
import banner2 from "../../../Images/banner2.jpg";
import banner3 from "../../../Images/banner3.jpg";
import banner4 from "../../../Images/banner4.jpg";
import { Link } from 'react-router-dom';

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
                        <h1 style={{color:"#2d2727",paddingBottom:"1rem"}}>Ash Health Care</h1>
                        <Link to="/home"><button className="banner-btn">About</button></Link>
                        <Link to="/contact"><button className="banner-btn ms-2 ">Contact</button></Link>
                        </div>
                        <img src={banner1} alt="" style={{}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ position: 'absolute' }}>
                        <h1 style={{color:"#2d2727",paddingBottom:"1rem"}}>Ash Health Care</h1>
                        <Link to="/home"><button className="banner-btn">About</button></Link>
                        <Link to="/contact"><button className="banner-btn ms-2 ">Contact</button></Link>
                        </div>
                        <img src={banner2} alt="" style={{}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ position: 'absolute' }}>
                        <h1 style={{color:"#2d2727",paddingBottom:"1rem"}}>Ash Health Care</h1>
                        <Link to="/home"><button className="banner-btn">About</button></Link>
                        <Link to="/contact"><button className="banner-btn ms-2 ">Contact</button></Link>
                        </div>
                        <img src={banner3} alt="" style={{}} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ position: 'absolute' }}>
                        <h1 style={{color:"#2d2727",paddingBottom:"1rem"}}>Ash Health Care</h1>
                        <button className="banner-btn ms-2">About</button>
                        <Link to="/contact"><button className="banner-btn ms-2 ">Contact</button></Link>
                        </div>
                        <img src={banner4} alt="" style={{}} />
                    </SwiperSlide>
                </Swiper>
            </>
        </div>

    );
};

export default Banner;