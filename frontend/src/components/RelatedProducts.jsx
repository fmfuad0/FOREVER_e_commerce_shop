import React, {useContext, useEffect, useState} from 'react';
import {ShopContext} from "../context/ShopContext.jsx";
import ProductItem from "./ProductItem.jsx";
import Title from "./Title.jsx";

function RelatedProducts(props) {
    const {category, subCategory} = props;
    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(()=>{
        if(products.length > 0){
            let relatedProducts = products.filter(item => item.category === category && item.subCategory === subCategory);
            setRelated(relatedProducts.slice(0, 10));
            console.log(category, subCategory);
        }
    }, [products, category, subCategory]);


    return (
        <div>
            <p>{related.length}</p>

            <div className="text-center text-3xl py-2">
                <Title text1="RELATED" text2="COLLECTIONS" />
            </div>

            <div className="flex flex-wrap justify-around gap-4">
                {related.map((item, index) => (
                    <div key={item._id || index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
                        <ProductItem
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    </div>
                ))}
            </div>
        </div>

    );
}

export default RelatedProducts;