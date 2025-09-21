import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {ShopContext} from "../context/ShopContext.jsx";

function Login(props) {
    const [currentState, setCurrentState] = useState("Login")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const context = useContext(ShopContext);
    const {setIsLoggedIn}=context;

    

    const onSubmit =async (e) => {
        e.preventDefault();
        console.log(currentState);
        if(currentState === "Login"){
            const res = await fetch("https://forever-e-commerce-shop.onrender.com/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({username:username, password:password})
            })
            const data = await res.json()
            if(res.status === 200){
                window.alert("Login successful");
                setIsLoggedIn(true)
                navigate("/");
            }else{
                window.alert(data);
                console.log(data)
            }
        }
    }

    useEffect(()=>{
        setUsername("fmfuad");
        setPassword("pass");
    })
    
    return (
        <div>
            <form className={`flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-15 gap-4 text-gray-800 `}  autoComplete={(currentState!=="Login")? "off":"on"}>
                <div className={`inline-flex justify-center items-center gap-2 mb-2 mt-10`}>
                    <p className={`prata-regular text-4xl`}>{currentState}</p>
                    <hr className={`border-none h-[1.5px] w-8 bg-gray-800`}/>
                </div>
                {(currentState!=="Login")?(<input type={"text"} className={`w-full px-3 py-2 border border-gray-800`} placeholder={"Name"} autoComplete={"off"}  onChange={(e)=>setName(e.target.value)}/>):""}
                <input type={(currentState!=="Login")?"email":"text"} className={`w-full px-3 py-2 border border-gray-800`} placeholder={`Email ${(currentState==="Login")?"or Username" : ""}`} onChange={(e)=> {setEmail(e.target.value);setUsername(e.target.value);}}/>
                <input type={"password"} className={`w-full px-3 py-2 border border-gray-800`} placeholder={"Password"}  onChange={(e)=>setPassword(e.target.value)}/>
                <div className={`flex w-full justify-between items-center text`}>
                    <p className={`cursor-pointer`}>Forgot your password?</p>
                    {
                        currentState === "Login" ? <p className={`cursor-pointer`} onClick={()=>{setCurrentState("Sign Up")}}>Create an account.</p> : <p className={`cursor-pointer`} onClick={()=>{setCurrentState("Login")}}>Login Here.</p>
                    }
                </div>

                <button onClick={onSubmit} type={"submit"} className={`text-semibold bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer tracking-[5px]`} >{currentState.toUpperCase()}</button>
                Click login to enter.<br/>First login may take some time.Pleas click login and wait or come back after 15 to 20 sec .
            </form>

        </div>
    );
}

export default Login;
