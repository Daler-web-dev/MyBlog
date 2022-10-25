import Image from 'next/image';
import React from 'react';
import Author from '../../components/_child/Author';
import Related from '../../components/_child/Related';
import Format from '../../Layout/Format';

const Page = () => {
    return (
        <Format>
            <section className="container mx-auto md:px-2 py-16 w-1/2" >
                <div className='flex justify-center'>
                    <Author/>
                </div>

                <div className="post py-10">
                    <h1 className='font-bold text-4xl text-center pb-5 ' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi blanditiis ab cumque asperiores.
                    </h1>
                    <p className='text-gray-500 text-xl text-center' >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam.
                    </p>

                    <div className="py-10">
                        <Image src={"/images/img1.jpg"} width={900} height={600}  />
                    </div>

                    <div className="content text-gray-500 text-lg flex flex-col gap-4">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi officia repudiandae deserunt minus totam dolores eum quidem eveniet labore explicabo quod animi quas quasi, rem voluptatem, praesentium amet ut accusantium.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi officia repudiandae deserunt minus totam dolores eum quidem eveniet labore explicabo quod animi quas quasi, rem voluptatem, praesentium amet ut accusantium.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi officia repudiandae deserunt minus totam dolores eum quidem eveniet labore explicabo quod animi quas quasi, rem voluptatem, praesentium amet ut accusantium.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi officia repudiandae deserunt minus totam dolores eum quidem eveniet labore explicabo quod animi quas quasi, rem voluptatem, praesentium amet ut accusantium.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi officia repudiandae deserunt minus totam dolores eum quidem eveniet labore explicabo quod animi quas quasi, rem voluptatem, praesentium amet ut accusantium.
                        </p>
                    </div>
                </div>
                <Related/>
            </section>
        </Format>
    );
};

export default Page;