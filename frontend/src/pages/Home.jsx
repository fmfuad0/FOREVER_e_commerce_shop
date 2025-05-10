import React, {useContext, useEffect} from 'react';
import Hero from '../components/Hero.jsx'
import LatestCollections from "../components/LatestCollections.jsx";
import BestSeller from "../components/BestSeller.jsx";
import OurPolicy from "../components/OurPolicy.jsx";
import NewsLetterBox from "../components/NewsLetterBox.jsx";
import {ShopContext} from "../context/ShopContext.jsx";
import {useNavigate} from "react-router-dom";

function Home(props) {
    const navigate = useNavigate();
    const context = useContext(ShopContext);
    const {isLoggedIn} = context
    return (
        <div className={`items-center text-center px-5 pt-10`}>
            <Hero/>
            <LatestCollections/>
            <BestSeller/>
            <OurPolicy/>
            <NewsLetterBox/>
        </div>
    );
}

export default Home;