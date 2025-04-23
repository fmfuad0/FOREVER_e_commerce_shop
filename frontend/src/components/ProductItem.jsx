import React, {useContext} from 'react';
import {ShopContext} from "../context/ShopContext.jsx";
import {Link} from "react-router-dom";

function ProductItem(props) {
    const {id, image, name, price} = props;
    const {currency} = useContext(ShopContext)
    return (
        <Link className={`text-gray-700 cursor-pointer`} to={`/product/${id}`}>
            <div className={`overflow-hidden`}>
                <img src={image[0]} alt={name} className={`hover:scale-110 transition ease-in-out`}/>
            </div>
            <p className={`text-sm pt-3 pb-1`}>{name}</p>
            <p className={`text-lg  font-semibold text-left ml-5`}>{currency}{price}</p>
        </Link>
    );
}

export default ProductItem;