import React from 'react';

const Newsletter = () => {


    return (
        <section className="bg-gray-50 mt-20">
            <div className="container mx-auto md:px-20 py-16 text-center">
                <h1 className="font-bold text-3xl " >Subscribe Newsletter</h1>
                <div className="py-4" >
                    <input type="text" className='shadow border rounded w-9/12 py-3 px-3 text-grey-700 focus:outline-none focus:shadow-outline ' placeholder="Enter your Email"  />
                </div>
                <button className='bg-orange-400 px-20 py-3 rounded-full text-grey-50 text-xl' >
                    Subsrcibe
                </button>
            </div>
        </section>
    );
};

export default Newsletter;