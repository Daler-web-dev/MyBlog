import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import fetcher from "../lib/fetcher";
import { getPost } from "../lib/helper";
import Author from "./_child/Author";
import Error from "./_child/Error";
import Spinner from "./_child/Spinner";

const SectionTwo = () => {
	const {data, isLoading, isError} = fetcher('api/posts')

	if(isLoading) return <Spinner/>
	if(isError) return <Error/>

	return (
		<div className="container mx-auto md:px-20 py-10">
			<h1 className="font-bold text-4xl py-12 text-center">
				Latest Posts
			</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
				{
					data.map((item, index) => <Post data={item} key={index} />)
				}
            </div>
		</div>
	);
};

const Post = ({data: {id, img, title, subtitle, category, published, author}}) => {
	return (
		<div className="item">
			<div className="images">
				<Link href={`/posts/${id}`}>
					<a>
						<Image
							src={img || "/"}
							alt={""}
							width={600}
							height={350}
						/>
					</a>
				</Link>
			</div>
			<div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={`/posts/${id}`}>
                        <a className="text-orange-600">{category}</a>
                    </Link>
                    <Link href={`/posts/${id}`}>
                        <a className="text-gray-800"> - {published}</a>
                    </Link>
                </div>
                <div className="title">
					<Link href={`/posts/${id}`}>
						<a className="text-xl font-bold text-gray-800 hover:text-gray-500 ">
							{title}
						</a>
					</Link>
				</div>
                <p className="text-gray-500 py-3">
					{subtitle}
				</p>
				{author ? <Author {...author} /> : <></>}
            </div>
		</div>
	);
};

export default SectionTwo;
