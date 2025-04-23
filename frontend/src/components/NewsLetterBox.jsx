import React from 'react';

function NewsLetterBox(props) {
    const onSubmitHandler = (evt) => {
        evt.preventDefault();
    }
    return (
        <div className={`text-center`}>
            <p className={`text-3xl font-medium text-gray-800`}>Subscribe now & get 20% off.</p>
            <p className={`text-gray-400 mt-3`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form onSubmit={onSubmitHandler} className={`w-full sm:w-1/2 flex items-center gap-4 mx-auto my-6 border pl-3`}>
                <input className={`text-center w-full sm:flex-1 outline-none`} placeholder={"Enter e-mail "} type="email"/>
                <button className={`bg-black text-white text-xs px-10 py-4`} type={"submit"}>S U B S C R I B E</button>
            </form>
        </div>
    );
}

export default NewsLetterBox;