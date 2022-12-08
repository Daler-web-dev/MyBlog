import Image from "next/image";
import React, { useEffect, useState } from "react";
import Author from "../../components/_child/Author";
import Error from "../../components/_child/Error";
import Related from "../../components/_child/Related";
import Spinner from "../../components/_child/Spinner";
import Format from "../../Layout/Format";
import ReactMarkdown from "react-markdown";
import { url } from "../../next.config";
import DarkMode from "../../components/_child/DarkMode";
import Code from "../../components/_child/Code";
import {serialize} from 'next-mdx-remote/serialize'
import { MDXRemote } from "next-mdx-remote";
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';



export default function Page({ article, html }) {
	console.log(article);
	// if(article) return <Spinner/>
	if (article?.error) return <Error />;
	else if (!article) return <Error />;

	return <Article {...article.data} html={html} />;
}

const Article = ({
	attributes: { author, img, title, subtitle, description }, html
}) => {
	let coverImage = url + img?.data?.attributes?.url;

	return (
		<Format>
			<DarkMode />
			<section className="container mx-auto md:px-2 py-16 w-[70%] p-4 flex flex-col items-center ">
				<div className="flex justify-center">
					{author ? <Author {...author} /> : <></>}
				</div>

				<div className="post py-10 flex flex-col items-center text-center">
					<h1 className="font-bold text-4xl text-center md:pb-5">
						{title || "No Title"}
					</h1>
					<p className="text-gray-500 text-xl text-center">
						{subtitle || "No Subtitle"}
					</p>

					<div className="py-10">
						<Image
							loader={() => coverImage}
							src={coverImage || "/images/img1.jpg"}
							width={900}
							height={600}
							objectFit="cover"
							objectPosition="center 30%"
						/>
					</div>

					<div className="content text-gray-500 text-lg flex flex-col w-2/2 ">
						<MDXRemote {...html} />
						{/* { */}
							{/* // !html ? null : <MDXRemote {...html} /> */}
						{/* } */}
						{/* <ReactMarkdown>{html}</ReactMarkdown> */}
						{/* <Code/> */}
					</div>
				</div>
				<Related />
			</section>
		</Format>
	);
};

export const getServerSideProps = async ({ query }) => {
	const router = query.postid;

	const res = await fetch(url + `/api/articles/${router}?populate=img`);
	const stylesheet = await res.json();

	const attr = stylesheet.data.attributes

	const html = await serialize(attr.description, { mdxOptions: {
        rehypePlugins: [
            rehypeCodeTitles,
            rehypePrism
        ]
    } })

	return {
		props: { article: stylesheet, html },
	};
};
