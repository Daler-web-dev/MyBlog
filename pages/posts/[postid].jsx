import Image from 'next/image';
import React from 'react';
import Author from '../../components/_child/Author';
import Error from '../../components/_child/Error';
import Related from '../../components/_child/Related';
import Spinner from '../../components/_child/Spinner';
import Format from '../../Layout/Format';
import ReactMarkdown from 'react-markdown'
import {url} from '../../next.config'


export default function Page({article}) {

    // if(article) return <Spinner/>
    if(article?.error) return <Error/>
    else if (!article) return <Error/>

    return (
        <Article {...article.data} />
    )

}

const Article = ({attributes: {author, img, title, subtitle, description}}) => {
    let coverImage = url + img?.data?.attributes?.url

    return (
        <Format>
            <section className="container mx-auto md:px-2 py-16 w-2/2 p-4" >
                <div className='flex justify-center'>
                    {author ? <Author {...author} /> : <></>}
                </div>

                <div className="post py-10">
                    <h1 className='font-bold text-4xl text-center pb-5' >
                        {title || "No Title" }
                    </h1>
                    <p className='text-gray-500 text-xl text-center' >
                        {subtitle || "No Subtitle"}
                    </p>

                    <div className="py-10">
                        <Image loader={() => coverImage} src={coverImage || "/images/img1.jpg"} width={900} height={600} objectFit="cover"
							objectPosition="center 30%"  />
                    </div>

                    <div className="content text-gray-500 text-lg flex flex-col gap-4">
                        <ReactMarkdown>
                            {description}
                        </ReactMarkdown>
                    </div>
                </div>
                <Related/>
            </section>
        </Format>
    );
};

export const getServerSideProps = async ({ query }) => {
    const router = query.postid;

    const res = await fetch(url + `/api/articles/${router}?populate=img`);
    const stylesheet = await res.json(); 

    return {
        props: { article: stylesheet }
    };
};