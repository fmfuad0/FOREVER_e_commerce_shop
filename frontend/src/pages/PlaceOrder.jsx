import React, {useContext, useState} from 'react';
import Title from "../components/Title.jsx";
import CartTotal from "../components/CartTotal.jsx";
import {assets} from "../assets/assets.js";
import {ShopContext} from "../context/ShopContext.jsx";


function PlaceOrder(props) {
    const [method, setMethod] = useState("COD");
    const {navigate} = useContext(ShopContext);
    return (
        <div className="px-20 flex flex-col justify-between gap-4 sm:gap-5 sm:pt-14 min-h-[80vw] sm:flex-row">
            {/*------------Left side-------------*/}
            <div className={`flex flex-col w-full gap-4 sm:max-w-[480px]`}>
                <div className={`text-xl sm:text-2xl my3
                `}>
                    <Title text1={"DELIVERY"} text2={"INFORMATION"}/>

                </div>
                <div className={`flex gap-3`}>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"text"} placeholder={"First Name"}/>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"text"} placeholder={"Last Name"}/>
                </div>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"email"} placeholder={"Email address"}/>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"text"} placeholder={"Street"}/>
                <div className={`flex gap-3`}>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"text"} placeholder={"City"}/>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"text"} placeholder={"State"}/>
                </div>
                <div className={`flex gap-3`}>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"number"} placeholder={"Zipcode"}/>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"text"} placeholder={"country"}/>
                </div>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"number"} placeholder={"Phone"}/>
            </div>

            {/*--------Right side-----------*/}
            <div className={`mt-8`}>
                <div className={`mr-30 min-w-80`}>
                    <CartTotal/>
                </div>
                <div className={`mt-10 text-2xl `}>
                    <Title text1={"PAYMENT"} text2={"METHOD"}/>
                    <div className={`mt-5 flex flex-col gap-3 sm:flex-row`}>
                        <div onClick={()=>{setMethod("stripe")}} className={`flex item-center gap-3 border py-2 px-3 cursor-pointer`}>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'? "bg-green-300" : ""}`}></p>
                            <img src={assets.stripe_logo} className={`h-5 mx-4`}/>
                        </div>
                        <div onClick={()=>{setMethod("razorpay")}} className={`flex item-center gap-3 border py-2 px-3 cursor-pointer`}>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay'? "bg-green-300" : ""}`}></p>
                            <img src={assets.razorpay_logo} className={`h-5 mx-4`}/>
                        </div>
                        <div onClick={()=>{setMethod("COD")}} className={`flex item-center gap-3 border py-2 px-3 cursor-pointer`}>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='COD'? "bg-green-300" : ""}`}></p>
                            <p className={`text-gray-500 text-sm font-medium mx-4`}>CASH ON DELIVERY</p>

                        </div>

                    </div>
                </div>

                <div className={`w-full text-start`}>
                    <button onClick={()=>{navigate("/orders")}} className={`bg-black text-white text-sm my-5 px-8 py-3 hover:bg-slate-600 transition ease-in-out cursor-pointer`} >PLACE ORDER</button>
                </div>
            </div>
        </div>
    );
}

export default PlaceOrder;