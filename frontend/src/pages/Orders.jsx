import React, {useContext, useEffect, useState} from 'react';
import {ShopContext} from "../context/ShopContext.jsx";
import Title from "../components/Title.jsx";
import { products } from '../assets/assets.js';
import cart from "./Cart.jsx";

function Orders(props) {
    const {products, currency} = useContext(ShopContext)
    const [orders, setOrders] = useState([]);
    const [items, setItems] = useState([]);
    useEffect(()=>{
        const getData = async () => {
            let c=[];
            const res = await fetch(`http://localhost:3000/get-orders`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json();
            console.log("data ",data);
            setOrders(data);
            const it=[]
            data.map((item) => {
                const cart = item.cart;
                for(const [key, value] of Object.entries(cart)) {
                    const product = products.find(item=>item._id===key)
                    if(!it.includes(product))
                    it.push(product)
                }
                console.log(it)
                setItems(it);
            })
        }
        getData();
    }, [])
    const getQuantity = (item) => {
        let q=0;
        Object.entries(item).map(([key, value])=>{q+=value})
        return q;
    }

    return (
        <div className="sm:px-10 md:px-16 lg:px-20 border-t pt-16">
            <div className="text-2xl text-center mb-5">
                <Title text1={"MY"} text2={"ORDERS"} />
            </div>

            <div className={`px-10`}>
                {orders.map((order, index) => (
                    <div
                    key={index}
                    className="py-6 border-t border-b text-gray-700 flex md:flex-row md:items-center justify-around gap-6"
                    >
                        {/* Left: Product Info */}
                        <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-4 gap-y-6`}>

                            {Object.entries(order["cart"]).map(([key, value]) => (
                                <div className="w-full flex items-center justify-center sm:gap-6 text-sm">
                                    <img
                                        className="w-10 h-auto object-contain"
                                        src={items.find(i=>i._id===key).image[0]}
                                        alt={items.find(i=>i._id===key).name}
                                    />
                                    <div>
                                        <p className="text-base font-medium">{items.find(i=>i._id===key).name}</p>
                                        <div className="items-center gap-3 mt-2 text-sm text-gray-700">
                                            <p className="text-lg font-semibold">{currency}{items.find(i=>i._id===key).price}</p>
                                            <p className="text-lg font-semibold">{`Quantity : ${getQuantity(value)}`}</p>
                                        </div>
                                        <p className="mt-2">
                                            Date: <span className="text-gray-400">25 Jul, 2025</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Center: Ready to ship */}
                        <div className="flex justify-center items-center md:w-1/3">
                            <div className="flex items-center gap-2 text-sm">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                <p className="font-medium">Ready to ship</p>
                            </div>
                        </div>

                        {/* Right: Track Button */}
                        <div className="flex justify-end w-1/3">
                            <button className={`bg-black text-white text-sm  px-8 py-3 hover:bg-slate-600 transition ease-in-out cursor-pointer`} >TRACK ORDER</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    );
}

export default Orders;