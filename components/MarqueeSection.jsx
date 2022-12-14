import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";
import {GrReactjs, GrNode} from 'react-icons/gr'
import {FaVuejs} from 'react-icons/fa'
import {SiMaterialui, SiJavascript, SiSass, SiCss3, SiHtml5} from 'react-icons/si'


const stack = [
    {
        title: "React js",
        icon: <GrReactjs  size="100%" color='skyblue' />
    },
    {
        title: "Vue js",
        icon: <FaVuejs  size="100%" color='#34A369' />
    },
    {
        title: "Material ui",
        icon: <SiMaterialui  size="100%" color='#0C60EE' />
    },
    {
        title: "Node JS",
        icon: <GrNode  size="100%" color='#6DBA1E' />
    },
    {
        title: "Javascript",
        icon: <SiJavascript  size="100%" color='#E9D319' />
    },
    {
        title: "HTML",
        icon: <SiHtml5  size="100%" color='#D0351D' />
    },
    {
        title: "CSS",
        icon: <SiCss3  size="100%" color='#0B51AB' />
    },
    {
        title: "SASS",
        icon: <SiSass  size="100%" color='#BF4E87' />
    }
]
 
const MarqueeSection = ({speed=70, direction="left"}) => {
    const generateIcons = (arr) => {
        return arr.map((item, idx) => {
            return <div className='w-[35px] md:w-full h-[50px] mr-[10px] md:h-[70px] md:mr-20'  key={idx} >{item.icon}</div>
        })
    }
    return (
        <>
            <Marquee speed={speed} direction={direction} >
                {generateIcons(stack)}
            </Marquee>
        </>
    );
};

export default MarqueeSection;