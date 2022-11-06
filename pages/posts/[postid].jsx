import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { SWRConfig } from 'swr';
import Author from '../../components/_child/Author';
import Error from '../../components/_child/Error';
import Related from '../../components/_child/Related';
import Spinner from '../../components/_child/Spinner';
import Format from '../../Layout/Format';
import fetcher from '../../lib/fetcher';
import {getPost} from '../../lib/helper'


export default function Page({ fallback }) {
    const router = useRouter()

    const {arr, isLoading, isError} = fetcher(`/api/articles/${router.query.postid}`)


    if(isLoading) return <Spinner/>
    if(isError) return <Error/>

    return (
        <SWRConfig value={{ fallback }} >
            <Article {...arr} />
        </SWRConfig>
    )

}    

const Article = ({attributes: {author, img, title, subtitle, description}}) => {


    return (
        <Format>
            <section className="container mx-auto md:px-2 py-16 w-1/2" >
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
                        <Image src={img || "/images/img1.jpg"} width={900} height={600}  />
                    </div>

                    <div className="content text-gray-500 text-lg flex flex-col gap-4">
                        {description}
                    </div>
                </div>
                <Related/>
            </section>
        </Format>
    );
};

// export default Page;

export async function getStaticProps({params}) {
    const posts = await getPost(params.postid)


    return {
        props: {
            fallback: {
                '/api/posts/': posts
            }
        }
    }
}
  
export async function getStaticPaths() {
    const post = await getPost()

    const paths = post.map(item => {
        return {
            params: {
                postid: item.id.toString()
            }
        }
    })

    return {
        paths, 
        fallback: false
    }
}



