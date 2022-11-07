import Image from "next/image";
import Link from "next/link";
import React from "react";
import fetcher from "../lib/fetcher";
import { url } from "../next.config";
import Author from "./_child/Author";
import Error from "./_child/Error";
import Spinner from "./_child/Spinner";

const SectionFour = () => {
	const {arr, isLoading, isError} = fetcher("/api/articles?populate=img")

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
						{arr || "" ? arr.slice(1,3).map(item => <Post data={item.attributes} />) : <></>}
					</div>
				</div>
				<div className="item">
					<h1 className="font-bold text-4xl py-12 text-start">
						Travel
					</h1>
					<div className="flex flex-col gap-6">
						{arr ? arr.slice(3).map(item => <Post data={item.attributes} />) : <></>}
					</div>
				</div>
			</div>
		</section>
	);
};

const Post = ({data: {id, img, title, subtitle, category, published, author}}) => {
	let coverImage = url + img?.data?.attributes?.url

	return (
		<div className="flex gap-5">
			<div className="images flex-flex-col jusify-start">
				<Link href={"/"}>
					<a>
						<Image
							loader={() => coverImage}
							src={coverImage || "/"}
							className="rounded"
							width={300}
							height={250}
							objectFit="cover"
						/>
					</a>
				</Link>
			</div>
			<div className="info flex justify-center flex-col">
				<div className="cat">
					<Link href={`/posts/${id}`}>
						<a className="text-orange-600">{category || ""}</a>
					</Link>
					<Link href={`/posts/${id}`}>
						<a className="text-gray-800"> - {published || ""}</a>
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
