import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Format = ({children}) =>{
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            
            <Header></Header>
            <main className="max-w-[1920px] mx-auto" >
                {children}
            </main>
            <Footer></Footer>
        </>
    )
}

export default Format;