import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ShopContext} from "../context/ShopContext.jsx";
import {assets} from "../assets/assets.js";
import RelatedProducts from "../components/RelatedProducts.jsx";

function Product(props) {
    const {productId} = useParams();
    const {products, currency, addToCart} = useContext(ShopContext)
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState();
    const [size, setSize] = useState("");

    useEffect(() => {
        const fetchProductData = async () => {
            products.map((item)=>{
                if(productId===item._id){
                    setProductData(item)
                    setImage(item.image[0])
                    console.log(item.subCategory, item.category)
                    return null;
                }
            })
        }
        fetchProductData();
    },[productId, products])
    return productData ? (
        <div className={`px-20 border-t-2 pt-10 transition ease-in duration-500 opacity-100`}>
            <div className={`flex gap-12 sm:-12 flex-col sm:flex-row`}>
                <div className={`flex-1 flex flex-col-reverse gap-3 sm:flex-row`}>
                    <div className={`flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full`}>
                        {productData.image.map((image, index)=>{
                            return (<img key={index} src={image} alt={""} className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer`} onClick={(e) => setImage(image)}/>)
                        })}
                    </div>
                    <div className={`w-full sm:w[80%]`}>
                        <img className={`w-4/5 h-auto`} src={image} alt={""} />
                    </div>
                </div>
                {/*-------------Product Info--------------*/}
                <div className={`flex-1`}>
                    <h1 className={`font-semibold text-2xl mt-2`}>{productData.name}</h1>
                    <div className={`flex items-center  gap-1 mt-2
                    `}>
                        <img src={assets.star_icon} alt={""} className={`w-3 5`}/>
                        <img src={assets.star_icon} alt={""} className={`w-3 5`}/>
                        <img src={assets.star_icon} alt={""} className={`w-3 5`}/>
                        <img src={assets.star_icon} alt={""} className={`w-3 5`}/>
                        <img src={assets.star_dull_icon} alt={""} className={`w-3 5`}/>
                        <p className={`pl-2 `}></p>
                    </div>
                    <p className={`mt-5 text-3xl font-medium`}>{currency}{productData.price}</p>
                    <p className={`mt-5 md:w-4/5 text-gray-500`}>{productData.description}</p>
                    <div className={`flex items-baseline flex-col gap-4 my-8`}>
                        <p>Select Size</p>
                        <div className={`flex gap-2`}>
                            {productData.sizes.map((item, index)=>{
                                return (<button className={`border py-2 px-4 bg-gray-100 cursor-pointer ${(item===size)? "border-orange-500 bg-orange-200 border-2 rounded" : ""}`} key={index} onClick={()=>setSize(item)} >{item}</button>)
                            })}
                        </div>
                        <button onClick={()=>addToCart(productData._id, size)} className={`bg-black text-white px-8
                        py-3 text-sm active:bg-gray-700 cursor-pointer`}>ADD TO CART</button>
                        <hr className={`mt-8 sm:w-4/5`}/>
                        <div className={`text-sm text-gray-500 mt-5 flex flex-col gap-1`}>
                            <p>100% Original product.</p>
                            <p>Cash on delivery available on this product.</p>
                            <p>Easy return and exchange policy within 7 days</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*--------Description & Review Section-----------*/}
            <div className={`mt-20`}>
                <div className={`flex`}>
                    <b className={`border px-5 py-3 text-sm`}>Description</b>
                    <p className={`border px-5 py-3 text-sm`}>Rewiews(122)</p>
                </div>
                <div className={`flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500`}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                </div>
            </div>

            <div className={``}>
                <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
            </div>
        </div>
    ):(<div className={`opacity-0`}></div>)
}

export default Product;