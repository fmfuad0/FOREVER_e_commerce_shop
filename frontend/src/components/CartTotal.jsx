import React, {useContext} from 'react';
import Title from "./Title.jsx";
import {ShopContext} from "../context/ShopContext.jsx";

function CartTotal(props) {
    const {currency, deliveryFee, getCartTotal} = useContext(ShopContext);
    return (
        <div>
            <div className={`text-2xl mb-3 text-center`}>
                <Title text1={"YOUR"} text2={"CART"}/>
            </div>
            <div className={`flex flex-col gap-2 mt-2 text-medium font-semibold`}>
                <div className={`flex justify-between py-2  border-b border-gray-500`}>
                    <p>Subtotal</p>
                    <p>{currency}{getCartTotal()}</p>
                </div>
                <div className={`flex justify-between py-2  border-b border-gray-500`}>
                    <p>Shipping</p>
                    <p>{currency}{deliveryFee}.00</p>
                </div>
                <div className={`flex justify-between py-2 border-b border-gray-500`}>
                    <p>Total</p>
                    <p>{currency}{(getCartTotal()===0) ? 0 : (getCartTotal()+deliveryFee)}.00</p>
                </div>


            </div>
        </div>
    );
}

export default CartTotal;
