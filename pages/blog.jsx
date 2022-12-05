import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "../components/_child/Author";
import DarkMode from "../components/_child/DarkMode";
import Error from "../components/_child/Error";
import Spinner from "../components/_child/Spinner";
import Format from "../Layout/Format";
import useFetcher from "../lib/useFetcher";
import { url } from "../next.config";


const blog = () => {
	const [filteredData, setFilteredData] = useState([])
	const {arr, isLoading, isError} = useFetcher("/api/articles?populate=img")


	if(isLoading) return (<Spinner/>)
	if(isError) return (<Error/>)


	const filterData = (category) => {
		
	}


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
						<span key={index} className="tag" onClick={() => filterData(item)} >
							{item}
						</span>
					))}
				</div>
			</center>
			<section className="container-grid">
                {
					arr.map(item => <BlogItem key={item.id} {...item} id={item.id} />)
				}
            </section>
		</Format>
	);
};

const BlogItem = ({attributes, id}) => {
	let coverImage = url + attributes.img?.data?.attributes?.url

	return (
		<div className="flex flex-col rounded-t-[30px] bg-black overflow-hidden">
            <Link href={`/posts/${id}`} >
                <img
                    src={coverImage || "/images/img3.png"}
                    alt=""
                    className="sm:h-[200px] md:h-[400px] object-cover cursor-pointer "
                />
            </Link>
			<div className="bottom-info  bg-[#1E5C8F] p-5 text-white">
                <Link href={`/posts/${id}`} >
                    <div className="cursor-pointer" >
                        <h3 className="text-[24px] truncate text-elipsis overflow-hidden ..." >{attributes.title || "No title" }</h3>
                        <span>{attributes.published || "No published"}</span>
                    </div>
                </Link>

				<div className="flex justify-between items-center">
					{attributes.author ? <Author col="text-white" {...attributes.author} /> : <></>}
					<span className="tag h-[100%]">{attributes.category || "No category"}</span>
				</div>
			</div>
		</div>
	);
};

export default blog;
