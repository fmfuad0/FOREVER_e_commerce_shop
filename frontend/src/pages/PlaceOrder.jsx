import React, {useContext, useState} from 'react';
import Title from "../components/Title.jsx";
import CartTotal from "../components/CartTotal.jsx";
import {assets} from "../assets/assets.js";
import {ShopContext} from "../context/ShopContext.jsx";


function PlaceOrder(props) {
    const [paymentMethod, setPaymentMethod] = useState("COD");
    const {navigate, cartItems, getCartTotal, deliveryFee} = useContext(ShopContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState({});
    const [street, setStreet] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    // for (const [key, value] of Object.entries(cartItems)) {
    //     console.log(key)
    //     for (const [key2, value2] of Object.entries(value)) {
    //         console.log(`${key2}: ${value2}`);
    //     }
    // }

    const handleClick = async (e) => {
        e.preventDefault();
        if(!firstName || !lastName || !email || !phone || !state || !street || !zipCode || !city || !country) {
            window.alert("Provide all required fields.");
            navigate("/orders")
            return;
        }
        const res = await fetch(`http://localhost:3000/place-order`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                paymentDetails: {
                    subtotal:getCartTotal(),
                    shipping:deliveryFee,
                    total:getCartTotal()+deliveryFee,
                    paymentMethod
                },
                cart : cartItems,
                shippingDetails:{
                    firstName, lastName, email, phone, city, country, street, zipCode, state
                }
            })
        })
        const data = await res.json();
        if(res.status===200){
            window.alert("Order has been placed successfully.");
        }else{
            window.alert("Error occurred while placing order");
        }
    }
    return (
        <div className="px-20 flex flex-col justify-between gap-4 sm:gap-5 sm:pt-14 sm:flex-row">
            {/*------------Left side-------------*/}
            <div className={`flex flex-col w-full gap-4 pb-0 h-full sm:max-w-[480px]`}>
                <div className={`text-xl sm:text-2xl my3
                `}>
                    <Title text1={"DELIVERY"} text2={"INFORMATION"}/>

                </div>
                <div className={`flex gap-3`}>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"text"} placeholder={"First Name"} onChange={(e)=>setFirstName(e.target.value)}/>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"text"} placeholder={"Last Name"} onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"email"} placeholder={"Email address"} onChange={(e)=>setEmail(e.target.value)}/>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"text"} placeholder={"Street"} onChange={(e)=>setStreet(e.target.value)}/>
                <div className={`flex gap-3`}>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"text"} placeholder={"City"} onChange={(e)=>setCity(e.target.value)}/>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"text"} placeholder={"State"} onChange={(e)=>setState(e.target.value)}/>
                </div>
                <div className={`flex gap-3`}>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"number"} placeholder={"Zipcode"} onChange={(e)=>setZipCode(e.target.value)}/>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"text"} placeholder={"country"} onChange={(e)=>setCountry(e.target.value)}/>
                </div>
                    <input className={`border border-gray-300 rounded py-1.5 px-3.5 w-full`} type={"number"} placeholder={"Phone"} onChange={(e)=>setPhone(e.target.value)}/>
            </div>

            {/*--------Right side-----------*/}
            <div className={`mt-8 h-full pb-0`}>
                <div className={`mr-30 min-w-80`}>
                    <CartTotal text1={"PAYMENT"} text2={"DETAILS"}/>
                </div>
                <div className={`mt-10 text-2xl `}>
                    <Title text1={"PAYMENT"} text2={"METHOD"}/>
                    <div className={`mt-5 flex flex-col gap-3 sm:flex-row`}>
                        <div onClick={()=>{setPaymentMethod("stripe")}} className={`flex item-center gap-3 border py-2 px-3 cursor-pointer`}>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod==='stripe'? "bg-green-300" : ""}`}></p>
                            <img src={assets.stripe_logo} className={`h-5 mx-4`}/>
                        </div>
                        <div onClick={()=>{setPaymentMethod("razorpay")}} className={`flex item-center gap-3 border py-2 px-3 cursor-pointer`}>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod==='razorpay'? "bg-green-300" : ""}`}></p>
                            <img src={assets.razorpay_logo} className={`h-5 mx-4`}/>
                        </div>
                        <div onClick={()=>{setPaymentMethod("COD")}} className={`flex item-center gap-3 border py-2 px-3 cursor-pointer`}>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod==='COD'? "bg-green-300" : ""}`}></p>
                            <p className={`text-gray-500 text-sm font-medium mx-4`}>CASH ON DELIVERY</p>

                        </div>

                    </div>
                </div>
                <div className={`w-full text-start`}>
                    <button onClick={(e)=>{handleClick(e)}} className={`bg-black text-white text-sm my-5 px-8 py-3 hover:bg-slate-600 transition ease-in-out cursor-pointer`} >PLACE ORDER</button>
                </div>
            </div>
        </div>
    );
}

export default PlaceOrder;