import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Author = ({name, img, designation, col="text-gray-800"}) => {
    return (
        <div className="author flex py-5" >
            <Image src={img || "/images/author/author1.jpg"} alt="author" width="60" height="60" className="rounded-full" />
            <div className="flex flex-col justify-center px-4">
                <Link href={"#"} ><a className={`text-md font-bold ${col} hover:text-gray-600`}>{name || "No Name"}</a></Link>
                <span className="text-sm text-gray-500" >{designation || "NO designation"}</span>
            </div>
        </div>
    );
};

export default Author;