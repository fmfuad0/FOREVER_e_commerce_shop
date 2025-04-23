import React from 'react';
import {assets} from "../assets/assets.js";
import {Link} from "react-router-dom";

function Hero(props) {
    return (
        <div className={`w-12/13 flex flex-col sm:flex-row border justify-baseline border-gray-400 m-auto`}>
            {/* HERO LEFT*/}
            <div className={`sm:w-1/2 flex items-center justify-center sm:py-0 bg-slate-200`}>
                <div className={`text-[#414141]`}>
                    <div className="flex items-center gap-2">
                        <p className={`w-8 md:w-11 h-[2px] bg-[#414141]`}></p>
                        <p className={`font-medium text-sm md:text-base`}>OUR BESTSELLERS</p>
                    </div>
                <h1 className={`prata-regular text-3xl sm:py-3 lg:text-5xl leading-15 `}>Latest Arrivals</h1>
                    <div className={`flex items-center gap-2`}>
                        <Link to={"/collections"}><p className={`font-semibold text-sm md:text-base`}>SHOP NOW</p></Link>
                        <p className={`w-8 md:w-11 h-[1px] bg-[#414141]`}></p>
                    </div>
                </div>
            </div>
            {/* HERO RIGHT*/}
            <img src={assets.hero_img} className={`sm:w-1/2`}/>
        </div>
    );
}

export default Hero;