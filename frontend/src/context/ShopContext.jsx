import {createContext, useEffect, useState} from "react";
import {products} from "../assets/assets.js";
import cart from "../pages/Cart.jsx";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext({});

const ShopContextProvider = (props) => {

    const currency = '$'
    const deliveryFee = 10
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({"aaaac": { "L": 1, "XL": 1, "S": 1 }});
    const navigate = useNavigate();
    const addToCart = (itemId, size) => {
        if(!size){
            toast.error("Select Product Size")
            return;
        }
        const cartData = structuredClone(cartItems);
        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }

        if (cartData[itemId][size]) {
            cartData[itemId][size] += 1;
        } else {
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
        // setCartItems();
    };

    const getCartCount =function () {
        let totalCount = 0;
        for (const productId in cartItems) {
            const sizes = cartItems[productId];
            for (const size in sizes) {
                totalCount += sizes[size];
            }
        }
        return totalCount;
    };

    const updateQuantity = (productId, quantity, size)=>{
        let cartData = structuredClone(cartItems);
        cartData[productId][size] = quantity;
        setCartItems(cartData);
    }
    const getCartTotal = () => {
        let total = 0;
        for(const item in cartItems){
            const productData = products.find((product) => item === product._id)
            for(const data in cartItems[item]){
            console.log(cartItems[item][data])
                if(cartItems[item][data]>0)
                    total += cartItems[item][data]*productData.price;
            }
        }
        return total;
    }


    useEffect(() => {
        // console.log(cartItems)
    }, [cartItems]);


    const value={
        products,currency,deliveryFee,showSearch, setShowSearch, cartItems, addToCart, getCartCount, updateQuantity, getCartTotal,navigate
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;