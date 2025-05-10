import React, {useContext, useState} from 'react';
import {assets} from "../assets/assets.js";
import {Link, NavLink} from "react-router-dom";
import {ShopContext} from "../context/ShopContext.jsx";

function Navbar(props) {
    const [visible, setVisible] = useState(false);
    const {showSearch, setShowSearch, getCartCount} = useContext(ShopContext);
    return (
        <div className={`text-center flex items-center justify-around font-medium`}>
            <Link to={"/"}><img src={assets.logo} alt="logo"/></Link>
            <ul className={`hidden sm:flex gap-5 text-base text-gray-700`}>
                <NavLink to={`/`} className={`flex flex-col items-center gap-1`}>
                    <p>HOME</p>
                    <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 hidden`}/>
                </NavLink>
                <NavLink to={"/collections"} className={`flex flex-col items-center gap-1`}>
                    <p>COLLECTIONS</p>
                    <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 hidden`}/>
                </NavLink>
                <NavLink to={`/about`} className={`flex flex-col items-center gap-1`}>
                    <p>ABOUT</p>
                    <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 hidden`}/>
                </NavLink>
                <NavLink to={`/contact`} className={`flex flex-col items-center gap-1`}>
                    <p>CONTACT</p>
                    <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 hidden`}/>
                </NavLink>
            </ul>
            <div className={`flex items-center justify-between gap-6`}>
                <img onClick={(e)=>setShowSearch(!showSearch)} src={assets.search_icon} alt="logo" className={`w-5 cursor-pointer`}/>
                <div className="relative group">
                    {/* Profile Icon */}
                    <Link to="/login">
                        <img
                            className="w-5 cursor-pointer"
                            src={assets.profile_icon}
                            alt="profile"
                        />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="hidden group-hover:block absolute left-[-60px] top-6 z-50">
                        <div className="flex flex-col gap-2 w-36 bg-slate-100 text-gray-600 rounded shadow-md pb-2">
                            <p className="px-2 py-1 cursor-pointer hover:text-black hover:bg-slate-300">My Profile</p>
                            <p className="px-2 py-1 cursor-pointer hover:text-black hover:bg-slate-300">Orders</p>
                            <p className="px-2 py-1 cursor-pointer hover:text-black hover:bg-slate-300">Logout</p>
                        </div>
                    </div>
                </div>

                <Link to={`/cart`} className={`relative`}>
                    <img src={assets.cart_icon} className={`w-5 min-w-5`}/>
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
                </Link>
                <img
                    onClick={(e)=> {e.preventDefault();setVisible(true)}} src={assets.menu_icon} className={`w-5 cursor-pointer sm:hidden`}
                />
            </div>
            {/*sidebar menu*/}`
            <div className={`lg:hidden absolute top-[-5px] right-0 bottom-0 overflow:hidden bg-white transition-all ${visible? "w-full" : "w-0 hidden"}`} >
                <div className={`flex flex-col text-gray-600`}>
                    <div className={`flex items-center p-4 gap-3 cursor-pointer`} onClick={()=>setVisible(false) }>
                        <img src={assets.dropdown_icon} className={`h-4 rotate-180`}/>
                        <p className={``}>BACK</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className={`py-2 pl-6 border text-left w-2/4`} to={`/`}>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className={`py-2 pl-6 border  text-left w-2/4`} to={`/collections`}>COLLECTION</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className={`py-2 pl-6 border text-left w-2/4`} to={`/about`}>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className={`py-2 pl-6 border text-left w-2/4`} to={`/contact`}>CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;