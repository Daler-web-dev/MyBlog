import Image from "next/image";
import Link from "next/link";
import React from "react";
import fetcher from "../lib/fetcher";
import Author from "./_child/Author";
import Error from "./_child/Error";
import Spinner from "./_child/Spinner";

const SectionFour = () => {
	const {data, isLoading, isError} = fetcher('api/popular')

	if(isLoading) return <Spinner/>
	if(isError) return <Error/>


	return (
		<section className="container mx-auto md:px-20 py-16">
			<div className="grid lg:grid-cols-2">
				<div className="item">
					<h1 className="font-bold text-4xl py-12 text-start">
						Business
					</h1>
					<div className="flex flex-col gap-6">
						{data[1]?<Post data={data[1]} /> : <></>}
						{data[2]?<Post data={data[2]} /> : <></>}
						{data[3]?<Post data={data[3]} /> : <></>}
					</div>
				</div>
				<div className="item">
					<h1 className="font-bold text-4xl py-12 text-start">
						Travel
					</h1>
					<div className="flex flex-col gap-6">
						{data[4]?<Post data={data[4]} /> : <></>}
						{data[5]?<Post data={data[5]} /> : <></>}
						{data[2]?<Post data={data[2]} /> : <></>}
					</div>
				</div>
			</div>
		</section>
	);
};

const Post = ({data: {id, img, title, subtitle, category, published, author}}) => {
	return (
		<div className="flex gap-5">
			<div className="images flex-flex-col jusify-start">
				<Link href={"/"}>
					<a>
						<Image
							src={img || "/images/img1.jpg"}
							className="rounded"
							width={300}
							height={250}
						/>
					</a>
				</Link>
			</div>
			<div className="info flex justify-center flex-col">
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
						<a className="text-3xl md:text-xl font-bold text-gray-800 hover:text-gray-500 ">
							{title}
						</a>
					</Link>
				</div>
				{author ? <Author {...author} /> : <></>}
			</div>
		</div>
	);
};

export default SectionFour;
