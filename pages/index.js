import Head from "next/head"
import Link from "next/link"
export default function Home() {
    return (
        <>
        <Head>
            <title>Home</title>
        </Head>
        <section>
            <h1>This is the Home Page</h1>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/blog">Blog</Link>
        </section>
        </>
        
    );
}