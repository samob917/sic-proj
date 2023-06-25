import Link from "next/link";
import Head from "next/head";

export default function Blog() {
    return (
        <>
        <Head>
            <title>Blog</title>
            <section>
                <h1>This is the Blog section</h1>
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/blog">Blog</Link>
            </section>
        </Head>
        </>
    )
}