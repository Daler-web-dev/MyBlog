import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Author from "./_child/Author";

const SectionThree = () => {
	return (
		<div className="container mx-auto md:px-20 py-16">
			<h1 className="font-bold text-4xl py-12 text-center">
				Latest Posts
			</h1>
			{/* swiper */}
			<Swiper slidesPerView={2}>
				<SwiperSlide><Post/></SwiperSlide>
				<SwiperSlide><Post/></SwiperSlide>
				<SwiperSlide><Post/></SwiperSlide>
				<SwiperSlide><Post/></SwiperSlide>
			</Swiper>
		</div>
	);
};

const Post = () => {
	return (
		<div className="grid">
			<div className="images">
				<Link href={"/"}>
					<a className="rounded" >
						<Image
							src={"/images/img1.jpg"}
							alt={""}
							width={600}
							height={400}
						/>
					</a>
				</Link>
			</div>
			<div className="info flex justify-center flex-col py-4">
				<div className="cat">
					<Link href={"/"}>
						<a className="text-orange-600">Business, Travel</a>
					</Link>
					<Link href={"/"}>
						<a className="text-gray-800">- July 3 2022</a>
					</Link>
				</div>
				<div className="title">
					<Link href={"/"}>
						<a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-500 ">
							Your most unhappy customers are{" "}
						</a>
					</Link>
				</div>
				<p className="text-gray-500 py-3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Deserunt labore cupiditate consectetur! Dolor adipisci
					distinctio commodi earum velit dolore laboriosam sed ex,
					exercitationem ea.
				</p>
				<Author />
			</div>
		</div>
	);
};

export default SectionThree;
