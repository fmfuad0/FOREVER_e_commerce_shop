import React from 'react';
import {assets} from "../assets/assets.js";

function Footer(props) {
    return (<>
            <div className="mx-auto my-10 mt-30 text-sm text-center sm:grid grid-cols-[1fr_1fr_1fr] gap-14">
            <div className="flex flex-col items-center">
                <img src={assets.logo} className="mb-5 w-32" />
                <p className="w-full md:w-2/3 text-gray-600">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600 items-center">
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-xl font-medium mb-5">CONTACT</p>
                <ul className="flex flex-col gap-1 text-gray-600 items-center">
                    <li>+880123456789</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>


        </div>
        <div className={`text-center`}>
            <hr/>
            <p className={`py-5 text-base text-center m-auto`}>Copyright 2024@ forever.com-All rights reserved</p>
        </div>
</>
    );
}

export default Footer;