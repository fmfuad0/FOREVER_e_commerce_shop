import React, {useContext, useEffect, useState} from 'react';
import {ShopContext} from "../context/ShopContext.jsx";
import {assets} from "../assets/assets.js";
import Title from "../components/Title.jsx";
import ProductItem from "../components/ProductItem.jsx";

function Collection(props) {
    const { products } = useContext(ShopContext);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [showFilter, setShowFilter] = useState(false);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortValue, setSortValue] = useState("")
    const [searchValue, setSearchValue] = useState("");
    const {showSearch, setShowSearch} = useContext(ShopContext);


    useEffect(() => {
        const getFilteredProducts = () => {
            console.log(category, subCategory);
            let updated = products;
            if (category.length > 0) {
                updated = updated.filter(product => category.includes(product.category));
            }
            if (subCategory.length > 0) {
                updated = updated.filter(product => subCategory.includes(product.subCategory));
            }
            if(searchValue.length > 0) {
                updated = updated.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
            }
            if(sortValue.length > 0) {
                console.log("Sorting")
                console.log(sortValue)
                if (sortValue === "high-low") {
                    updated = [...updated].sort((a, b) => b.price - a.price); // High to low
                } else if (sortValue === "low-high") {
                    updated = [...updated].sort((a, b) => a.price - b.price); // Low to high
                }   else if(sortValue === "bestseller"){
                    updated = updated.filter(product =>product.bestseller);
                }
            }
            setFilteredProducts(updated)
            console.log(filteredProducts);
        }
        getFilteredProducts();
    }, [category, subCategory, sortValue, searchValue]);

    const toggleCategory = (e) => {
        console.log(e.target.value)
        if(category?.includes(e.target.value)){
            setCategory((prevState) => prevState.filter(item=>item!==e.target.value))
        }else{
            setCategory([...category.slice(0, 0), e.target.value, ...category.slice(0)])
        }
    }
    const toggleSubCategory = (e) => {
        console.log(e.target.value)
        if(subCategory?.includes(e.target.value)){
            setSubCategory((prevState) => prevState.filter(item=>item!==e.target.value))
        }else{
            setSubCategory([...subCategory.slice(0, 0), e.target.value, ...subCategory.slice(0)])
        }
    }


    return (
        <div className="pt-10 border-t border-gray-300">
            <div className={`flex`}>
                <input onChange={(e)=>setSearchValue(e.target.value)} type={"text"} className={`border mx-auto py-2 px-5 font-semibold w-[400px] ${showSearch? "": "hidden"}`} placeholder={'S E A R C H'}/>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-6 px-4 sm:px-10">
                {/* Filter Sidebar */}
                <div className="min-w-[200px] sm:w-1/4">
                    <p onClick={() => setShowFilter(!showFilter)}
                       className="my-2 text-xl flex items-center cursor-pointer gap-2">
                        FILTERS+{filteredProducts.length}+{showSearch.toString()}
                        <img
                            className={`h-4 transition-transform ${showFilter ? 'rotate-90' : ''} sm:hidden`}
                            src={assets.dropdown_icon}
                        />
                    </p>
                    <select className={`border p-3 ${showFilter ? '' : 'hidden'} md:block lg:block`}>
                        <option value="relevent" onClick={(e) => setSortValue(e.target.value)}>Sort by: Relevant
                        </option>
                        <option value="high-low" onClick={(e) => setSortValue(e.target.value)}>Sort by: High to Low
                        </option>
                        <option value="low-high" onClick={(e) => setSortValue(e.target.value)}>Sort by: Low to High
                        </option>
                        <option value="bestseller" onClick={(e) => setSortValue(e.target.value)}>Sort by: Bestseller
                        </option>
                    </select>

                    {/* Category Filters */}
                    <div className={`w-2/3 border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                        <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                            <label className="flex gap-2">
                                <input className="w-3" type="checkbox" value="Men" onClick={toggleCategory}/>
                                Men
                            </label>
                            <label className="flex gap-2">
                                <input className="w-3" type="checkbox" value="Women" onClick={toggleCategory}/>
                                Women
                            </label>
                            <label className="flex gap-2">
                                <input className="w-3" type="checkbox" value="Kids" onClick={toggleCategory}/>
                                Kids
                            </label>
                        </div>
                    </div>

                    {/* Type Filters */}
                    <div className={`w-2/3 border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                        <p className="mb-3 text-sm font-medium">TYPE</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                            <label className="flex gap-2">
                                <input onClick={toggleSubCategory} className="w-3" type="checkbox" value="Topwear"/>
                                Topwear
                            </label>
                            <label className="flex gap-2">
                                <input onClick={toggleSubCategory} className="w-3" type="checkbox" value="Bottomwear"/>
                                Bottomwear
                            </label>
                            <label className="flex gap-2">
                                <input onClick={toggleSubCategory} className="w-3" type="checkbox" value="Winterwear"/>
                                Winterwear
                            </label>
                        </div>
                    </div>
                </div>

                {/* Right Side Content */}
                <div className="flex-1 mr-[40px]">
                    <div className="mb-4 text-base ">
                        <Title text1="ALL" text2="COLLECTIONS"/>
                    </div>

                    {/* Add product listing or other content here */}
                    <div className={'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6'}>
                        {filteredProducts.map((item, index) => {
                            return (
                                <ProductItem key={index} id={item._id} image={item.image} name={item.name}
                                             price={item.price}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;