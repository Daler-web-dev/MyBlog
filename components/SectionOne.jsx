import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./_child/Author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/Spinner";
import Error from "./_child/Error";
import { url } from "../next.config";


const SectionOne = () => {
	const { arr, isLoading, isError } = fetcher("/api/articles?populate=img");

	if (isLoading) return <Spinner/>;
	if (isError) return <Error/>;

	SwiperCore.use([Autoplay]);

	const bg = {
		background: "url('/images/banner.png') no-repeat",
		backgroundPosition: "right",
	};

	return (
		<section className="py-16" style={bg}>
			<div className="container mx-auto md:px-20">
				<h1 className="font-bold text-4xl pb-12 text-center">
					Trending
				</h1>

				<Swiper
					slidesPerView={1}
					loop={true}
					autoplay= {{
					    delay: 2000
					}}
				>
					{arr ? arr.map((value, index) => (
						<SwiperSlide key={index}>
							<Slide id={value.id} data={value.attributes}></Slide>
						</SwiperSlide>
					)) : ""}
				</Swiper>
			</div>
		</section>
	);
};

const Slide = ({id, data: {img, title, subtitle, category, published, author }}) => {
	let coverImage = url + img?.data?.attributes?.url

	return (
		<div className="grid md:grid-cols-2 ">
			<div className="image">
				<Link href={`/posts/${id}`}>
					<a>
						<Image
							loader={() => coverImage}
							src={coverImage || "/images/myimage.jpg"}
							alt={""}
							width={600}
							height={600}
							objectFit="cover"
						/>
					</a>
				</Link>
			</div>
			<div className="info flex justify-center flex-col ">
				<div className="cat">
					<Link href={`/posts/${id}`}>
						<a className="text-orange-600">
							{category || "unknown"}
						</a>
					</Link>
					<Link href={`/posts/${id}`}>
						<a className="text-gray-800">
							{published || "unknown"}
						</a>
					</Link>
				</div>
				<div className="title">
					<Link href={`/posts/${id}`}>
						<a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-500 ">
							{title || 'no titlw'}
						</a>
					</Link>
				</div>
				<p className="text-gray-500 py-3">{subtitle || ""}</p>
				{author ? <Author {...author} /> : <></>}
			</div>
		</div>
	);
};

export default SectionOne;
