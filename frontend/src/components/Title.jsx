import React from 'react';

function Title(props) {
    const {text1, text2} = props;
    return (
        <div className={`inline-flex items-center gap-2`}>
            <p className={`font-bold text-3xl text-gray-500`}>{text1}<span className={` text-gray-700 ml-2`}>{text2}</span></p>
            <p className={`w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#414141] mt-1`}></p>
        </div>
    );
}

export default Title;