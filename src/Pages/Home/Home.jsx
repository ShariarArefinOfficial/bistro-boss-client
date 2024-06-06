//import React from 'react';

import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Hero from "./Hero/Hero";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;