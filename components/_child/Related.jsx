import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./Author";

const Related = () => {
	return (
		<section className="pt-12">
			<h1 className="font-bold text-4xl py-12 text-start">Related</h1>

			<div className="flex flex-col gap-10">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
		</section>
	);
};

const Post = () => {
	return (
		<div className="flex gap-5">
			<div className="images flex-flex-col jusify-start">
				<Link href={"/"}>
					<a>
						<Image
							src={"/images/img1.jpg"}
							className="rounded"
							width={300}
							height={200}
						/>
					</a>
				</Link>
			</div>
            <div className="info flex justify-center flex-col">
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
						<a className="text-3xl md:text-xl font-bold text-gray-800 hover:text-gray-500 ">
							Your most unhappy customers are your greates source
							of learning{" "}
						</a>
					</Link>
				</div>
				<Author />
			</div>
		</div>
	);
};

export default Related;
