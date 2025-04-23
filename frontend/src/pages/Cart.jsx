import React, {useContext, useEffect, useState} from 'react';
import {ShopContext} from "../context/ShopContext.jsx";
import Title from "../components/Title.jsx";
import {assets} from "../assets/assets.js";
import CartTotal from "../components/CartTotal.jsx";
import {Toastify} from "toastify";
import {toast} from "react-toastify";

function Cart(props) {
    const {products, currency, cartItems, updateQuantity, getCartTotal, navigate} = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        let tempData = [];
        for (const item in cartItems) {
            for (const key in cartItems[item]) {
                if (cartItems[item][key] > 0) {
                    tempData.push({
                        _id: item,
                        size: key,
                        quantity: cartItems[item][key],
                    });
                }
            }
        }
        // console.log(tempData);
        setCartData(tempData)
    }, [cartItems]);

    return (
        <div className={`px-30 border-t pt-10 `}>
            <div className={`text-2xl pb-10 mb-3 text-center`}>
                <Title text1={"YOUR"} text2={"CART"}/>
            </div>
                <p className={`text-right mr-30 font-bold  ${getCartTotal()>0? "" : "hidden"}`}>TOTAL :{getCartTotal()} </p>
            <div>
                {cartData.map((item, index) => {
                    const productData = products.find((product) => item._id === product._id)
                    return(
                        <div className={`font-semibold py-4 border-t border-b text-gray-700 grid grid-cols-[3fr_2fr_1fr] items-center gap-4`}>
                            <div className="flex items-start gap-6">
                                <img className={`max-w-13 sm:w-20`} src={productData.image[0]} />
                                <div>
                                    <p className={`text-xs sm:text-lg font-medium`}>{productData.name}</p>
                                    <div className={`flex items-center gap-5 mt-2`}>
                                        <p>{currency}{productData.price}</p>
                                        <p className={`px-2 sm:px-3 sm:py-1 border bg-slate-50`}>{item.size}</p>
                                    </div>
                                </div>
                            </div>
                            <input className={`border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1`} type="number" min={1} defaultValue={item.quantity} onChange={(e)=>{e.preventDefault();if(Number(e.target.value)!==0){updateQuantity(item._id,Number(e.target.value), item.size)}else{toast.error("Order quantity can't be zero.")}}}/>
                            <img className={`w-5 cursor-pointer`} onClick={()=>{updateQuantity(item._id, 0, item.size)}} src={assets.bin_icon}/>
                        </div>
                    )
                })}
            </div>
            {(getCartTotal()>0)?
                <div className={`flex justify-end my-10`}>
                    <div className="w-full sm:w-[350px]">
                        <CartTotal/>
                        <div className={`w-full text-end`}>
                            <button onClick={()=>navigate("/place-order")} className={`bg-black text-white text-sm my-8 px-8 py-3 hover:bg-slate-600 transition ease-in-out cursor-pointer`}>PROCEED TO CHECKOUT</button>

                        </div>
                    </div>

                </div>
            :    <div className={`text 3xl font-bold text-center`}>NO ITEM FOUND IN CART . <a href={"/collections"} > ADD?</a></div>
            }

        </div>
    );
}

export default Cart;