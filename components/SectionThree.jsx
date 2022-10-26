import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import fetcher from "../lib/fetcher";
import Author from "./_child/Author";
import Spinner from "./_child/Spinner";

const SectionThree = () => {

	const {data, isLoading, isError} = fetcher('api/popular')

	if(isLoading) return <Spinner/>
	if(isError) return <Error/>

	return (
		<div className="container mx-auto md:px-20 py-16">
			<h1 className="font-bold text-4xl py-12 text-center">
				Latest Posts
			</h1>
			{/* swiper */}
			<Swiper slidesPerView={2}>
				{data.map((item, index) => <SwiperSlide  key={index} ><Post data={item}/></SwiperSlide>)}
			</Swiper>
		</div>
	);
};

const Post = ({data: {id, img, title, subtitle, category, published, author}}) => {
	return (
		<div className="grid">
			<div className="images">
				<Link href={"/"}>
					<a className="rounded" >
						<Image
							src={img ||"/"}
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
					<Link href={"/"}>
						<a className="text-orange-600">{category}</a>
					</Link>
					<Link href={"/"}>
						<a className="text-gray-800"> - {published}</a>
					</Link>
				</div>
				<div className="title">
					<Link href={"/"}>
						<a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-500 ">
							{title}
						</a>
					</Link>
				</div>
				<p className="text-gray-500 py-3">
					{subtitle}
				</p>
				{author ? <Author /> : <></>}
			</div>
		</div>
	);
};

export default SectionThree;