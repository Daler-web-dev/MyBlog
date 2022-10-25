import Image from 'next/image';
import React from 'react';

const Error = () => {
    return (
        <div className="text-center py-10" >
            <h1 className="text-3xl font-bold text-orange-600 py-10" >Something Went Wrong</h1>
            <Image src={"/images/not_found.png"} width={400} height={400} />
        </div>
    );
};

export default Error;