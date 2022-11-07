import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import fetcher from "../lib/fetcher";
import { url } from "../next.config";
import Author from "./_child/Author";
import Spinner from "./_child/Spinner";

const SectionThree = () => {
	const { arr, isLoading, isError } = fetcher("/api/articles?populate=img");

	if (isLoading) return <Spinner></Spinner>;
	if (isError) return <Error></Error>;

	return (
		<section className="container mx-auto md:px-20 py-16">
			<h1 className="font-bold text-4xl py-12 text-center">
				Most Popular
			</h1>

			{/* swiper */}
			<Swiper
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
				}}
			>
				{arr ? arr.map((value, index) => (
					<SwiperSlide key={index}>
						<Post data={value.attributes}></Post>
					</SwiperSlide>
				)) : ""}
			</Swiper>
		</section>
	);
};

const Post = ({
	data: { id, img, title, subtitle, category, published, author },
}) => {
	console.log(img);

	let coverImage = url + img?.data?.attributes?.url

	return (
		<div className="grid">
			<div className="images">
				<Link href={"/"}>
					<a className="rounded">
						<Image
							loader={() => coverImage} 
							src={coverImage || "/images/img1.jpg"}
							alt={""}
							width={600}
							height={400}
							objectFit="cover"
						/>
					</a>
				</Link>
			</div>
			<div className="info flex justify-center flex-col py-4">
				<div className="cat">
					<Link href={`/posts/${id}`}>
						<a className="text-orange-600">{category || "" }</a>
					</Link>
					<Link href={`/posts/${id}`}>
						<a className="text-gray-800"> - {published || "" }</a>
					</Link>
				</div>
				<div className="title">
					<Link href={`/posts/${id}`}>
						<a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-500 ">
							{title || "" }
						</a>
					</Link>
				</div>
				<p className="text-gray-500 py-3">{subtitle || "" }</p>
				{author ? <Author {...author} /> : <></>}
			</div>
		</div>
	);
};

export default SectionThree;
