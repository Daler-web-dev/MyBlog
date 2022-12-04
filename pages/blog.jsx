import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "../components/_child/Author";
import DarkMode from "../components/_child/DarkMode";
import Format from "../Layout/Format";

const blog = () => {
	return (
		<Format>
			<DarkMode />
			<center className="w-[90%] md:w-[60%] mx-auto flex flex-col gap-6 mt-[40px]">
				<span className="motivation">BE TRULY FLEXIBLE</span>
				<h1 className="text-[24px] leading-[26px] md:text-[55px] md:leading-[55px]">
					All jobs and gigs that fit your schedule in one place.
				</h1>
				<div className="w-[100%] flex gap-2 flex-wrap justify-center">
					{[
						"HTML",
						"CSS",
						"JavaScript",
						"React Js",
						"Redux",
						"Next Js",
						"Node Js",
					].map((item, index) => (
						<span key={index} className="tag">
							{item}
						</span>
					))}
				</div>
			</center>
			<section className="container-grid">
                {[1,2,3,4,5,6].map(item => <BlogItem/>)}
            </section>
		</Format>
	);
};

const BlogItem = () => {
	return (
		<div className="flex flex-col rounded-t-[30px] bg-black overflow-hidden">
            <Link href={"#"} >
                <img
                    src="/images/img3.png"
                    alt=""
                    className="sm:h-[200px] md:h-[400px] object-cover"
                />
            </Link>
			<div className="bottom-info  bg-[#1E5C8F] p-5 text-white">
                <Link href={"#"} >
                    <div>
                        <h3 className="text-[24px]  " >Course how to kill</h3>
                        <span>I am joking</span>
                    </div>
                </Link>

				<div className="flex justify-between items-center">
					<Author col="text-white" /> <span className="tag h-[100%]">Category</span>
				</div>
			</div>
		</div>
	);
};

export default blog;
