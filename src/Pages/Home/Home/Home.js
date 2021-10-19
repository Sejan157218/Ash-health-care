import React from 'react';
import Banner from '../Banner/Banner';
import HomeAbout from '../HomeAbout/HomeAbout';
import OurDoctor from '../OurDoctor/OurDoctor';
import Services from '../Services/Services/Services';


const Home = () => {
    return (
        <div>
    
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <Services></Services>
            <OurDoctor></OurDoctor>


        </div>
    );
};

export default Home;