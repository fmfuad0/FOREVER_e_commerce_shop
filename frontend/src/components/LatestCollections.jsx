import React, {useContext, useEffect, useState} from 'react';
import {ShopContext} from "../context/ShopContext.jsx";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

function LatestCollections(props) {

    const [latestProducts, setLatestProducts] = useState([]);
    const {products} = useContext(ShopContext);
    console.log(products);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10))
    }, [])

    return (
        <div className={`my-10 sm:my-3 mx-auto w-[90%]`}>
            <div className={'text-center py-8 text-4xl'}>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className={`w-3/4 mb-3 m-auto text-xs sm:text-sm md-text-base text-gray-600`}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            </div>
            <div className={'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'}>
                {latestProducts.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    );
}

export default LatestCollections;