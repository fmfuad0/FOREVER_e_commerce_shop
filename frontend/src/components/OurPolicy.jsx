import React from 'react';
import {assets} from "../assets/assets.js";

function OurPolicy(props) {
    return (
        <div className={`flex flex-col sm:flex-row justify-center gap-[15%] sm:gap:2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 m-auto`}>
            <div >
                <img src={assets.exchange_icon} alt="icon" className={`w-12 m-auto mb-5 `}/>
                ,<p className={`font-semibold`}>Easy Exchange Policy</p>
                ,<p className={`text-gray-400`}>We offer hassle free policy.</p>
            </div>
            <div >
                <img src={assets.quality_icon} alt="icon" className={`w-12 m-auto mb-5 `}/>
                ,<p className={`font-semibold`}>7 Days Return Policy</p>
                ,<p className={`text-gray-400`}>We offer 7 day free return policy.</p>
            </div>
            <div >
                <img src={assets.support_img} alt="icon" className={`w-12 m-auto mb-5 `}/>
                ,<p className={`font-semibold`}>Best Customer Support</p>
                ,<p className={`text-gray-400`}>We provide 24/7 customer support.</p>
            </div>

        </div>
    );
}

export default OurPolicy;