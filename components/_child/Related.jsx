import Image from "next/image";
import Link from "next/link";
import React from "react";
import fetcher from "../../lib/fetcher";
import { url } from "../../next.config";
import Author from "./Author";
import Error from "./Error";
import Spinner from "./Spinner";

const Related = () => {
	const {arr, isLoading, isError} = fetcher("/api/articles?populate=img")

	if(isLoading) return <Spinner/>
	if(isError) return <Error/>

	return (
		<section className="pt-12">
			<h1 className="font-bold text-4xl py-12 text-start">Related</h1>

			<div className="flex flex-col gap-10">
				{ arr ? arr.map((item, index) => <Post key={index} data={item.attributes} />) : ""}
            </div>
		</section>
	);
};

const Post = ({id, data: {img, title, subtitle, category, published, author }}) => {
	let coverImage = url + img?.data?.attributes?.url

	return (
		<div className="flex gap-5">
			<div className="images flex-flex-col jusify-start">
				<Link href={"/"}>
					<a>
						<Image
							loader={() => coverImage}
							src={coverImage || "/images/img1.jpg"}
							className="rounded"
							width={300}
							height={200}
							objectFit="cover"
							objectPosition="0 30%"
						/>
					</a>
				</Link>
			</div>
            <div className="info flex justify-center flex-col">
				<div className="cat">
					<Link href={`/posts/${id}`}>
						<a className="text-orange-600">{category || "No Category"}</a>
					</Link>
					<Link href={`/posts/${id}`}>
						<a className="text-gray-800"> - {published || "No Date"}</a>
					</Link>
				</div>
				<div className="title">
					<Link href={`/posts/${id}`}>
						<a className="text-3xl md:text-xl font-bold text-gray-800 hover:text-gray-500 ">
							{title || "No Subtitle"}
						</a>
					</Link>
				</div>
				{author ? <Author {...author} /> : <></>}
			</div>
		</div>
	);
};

export default Related;
