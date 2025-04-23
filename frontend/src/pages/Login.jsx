import React, {useState} from 'react';

function Login(props) {
    const [currentState, setCurrentState] = useState("Sign Up")
    return (
        <div>
            <form className={`flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-15 gap-4 text-gray-800 `}>
                <div className={`inline-flex justify-center items-center gap-2 mb-2 mt-10`}>
                    <p className={`prata-regular text-4xl`}>{currentState}</p>
                    <hr className={`border-none h-[1.5px] w-8 bg-gray-800`}/>
                </div>
                <input type={"text"} className={`w-full px-3 py-2 border border-gray-800`} placeholder={"Name"}/>
                <input type={"email"} className={`w-full px-3 py-2 border border-gray-800`} placeholder={"Email"}/>
                <input type={"password"} className={`w-full px-3 py-2 border border-gray-800`} placeholder={"Password"}/>
                <div className={`flex w-full justify-between items-center text`}>
                    <p className={`cursor-pointer`}>Forgot your password?</p>
                    {
                        currentState === "Login" ? <p className={`cursor-pointer`} onClick={()=>{setCurrentState("Sign Up")}}>Create an account.</p> : <p className={`cursor-pointer`} onClick={()=>{setCurrentState("Login")}}>Login Here.</p>
                    }
                </div>

                <button type={"submit"} className={`text-semibold bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer tracking-[5px]`} >{currentState.toUpperCase()}</button>
            </form>

        </div>
    );
}

export default Login;