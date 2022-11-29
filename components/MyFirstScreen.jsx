import React from 'react';
import DarkMode from './_child/DarkMode';

const MyFirstScreen = () => {
    return (
        <section className="bg-[#0A0A0A] h-[80vh] py-10 px-3 md:mb-[100px] md:px-10 ">
            <div className="first-screen flex flex-col md:flex-row justify-between">
                <h1 className="text-[26px] text-[#fff] leading-7 md:text-[76px] md:leading-[60px] mb-2" >
                    Never stop learning
                </h1>
                <p className="text-[#fff] text-[14px] md:text-[22px] md:w-[90%] " >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cupiditate dolorum pariatur alias numquam recusandae iure distinctio, doloremque est ipsam odit illo, nesciunt, expedita eum! Ut a fugiat aliquam sit.
                </p>
                <div></div>
            </div>
            <div className="first-screen img-block max-h-[400px] md:max-h-[100%] "></div>
        </section>
    );
};


export default MyFirstScreen;