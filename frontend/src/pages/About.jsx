import React from 'react';
import Title from "../components/Title.jsx";
import {assets} from "../assets/assets.js";

function About(props) {
    return (
        <div className={`px-20`}>
            <div className={`text-2xl text-center pt-8 border-t`}>
                <Title text1={"ABOUT"} text2={"US"}/>
            </div>
            <div className={`my-10 flex flex-col gap-16 md:flex-row`}>
                <img src={assets.about_img} alt={"about"} className={`w-full md:max-w-[450px] `}/>
                <div className={`flex flex-col justify-center gap-6 md:w-2/4 text-gray-600`}>
                    <p>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas vehicula lectus at suscipit. Phasellus est felis, venenatis at diam eu, cursus viverra metus. Nam mattis mattis tempus. Ut sagittis efficitur nisi. Donec eu turpis.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim tortor a lorem placerat, ac suscipit augue posuere. Nulla nec mattis massa. Quisque vehicula diam non justo pharetra, a egestas lorem ullamcorper. Sed suscipit orci nec ante porttitor dignissim. Aliquam.     </p>
                    <p>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim tortor a lorem placerat, ac suscipit augue posuere. Nulla nec mattis massa. Quisque vehicula diam non justo pharetra, a egestas lorem ullamcorper. Sed suscipit orci nec ante porttitor dignissim. Aliquam. </p>
                    <b className={`text-gray-800 `}>Our Mission </b>
                    <p>Our mission al Forever is to empower customers woth choice, convenience and confidence.We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
                </div>
            </div>
            <div className={`text-center text-4xl py-4`}>
                <Title text1={"WHY"} text2={'CHOOSE US'}/>
            </div>
             <div className={`flex flex-col md:flex-row text-sm mb-20`}>
                 <div className={`border border-gray-400 px-10 md:px-16 lg:py-15 sm:py-20 flex flex-col gap-5`}>
                     <b>Quality Assurance : </b>
                     <p className={`text-gray-600`}>We meticulously select and vet each product to ensure it meets our stringent quality standards</p>
                 </div>
                 <div className={`border border-gray-400 px-10 md:px-16 lg:py-15 sm:py-20 flex flex-col gap-5`}>
                     <b>Convenience : </b>
                     <p className={`text-gray-600`}> With our user friendly interface and hassle-free ordering process , shopping has never been easier.</p>
                 </div>
                 <div className={`border border-gray-400 px-10 md:px-16 lg:py-15 sm:py-20 flex flex-col gap-5`}>
                     <b>Exceptional Customer Service : </b>
                     <p className={`text-gray-600`}> Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                 </div>


            </div>
        </div>
    );
}

export default About;