import React, {useContext} from 'react';
import {ShopContext} from "../context/ShopContext.jsx";
import Title from "../components/Title.jsx";

function Orders(props) {
    const {products, currency} = useContext(ShopContext)
    return (
        <div className="sm:px-10 md:px-16 lg:px-20 border-t pt-16">
            <div className="text-2xl text-center mb-5">
                <Title text1={"MY"} text2={"ORDERS"} />
            </div>

            <div className={`px-10`}>
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="py-6 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center justify-around gap-6"
                    >
                        {/* Left: Product Info */}
                        <div className="flex items-start justify-start sm:gap-6 text-sm md:w-1/3">
                            <img
                                className="w-20 h-auto object-contain"
                                src={product.image[0]}
                                alt={product.name}
                            />
                            <div>
                                <p className="text-base font-medium">{product.name}</p>
                                <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-700">
                                    <p className="text-lg font-semibold">{currency}{product.price}</p>
                                    <p>Quantity: 1</p>
                                    <p>Size: M</p>
                                </div>
                                <p className="mt-2">
                                    Date: <span className="text-gray-400">25 Jul, 2025</span>
                                </p>
                            </div>
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