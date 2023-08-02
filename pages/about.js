import Link from "next/link";
import Head from "next/head";

export default function About() {
    return (
        <>
        <Head>
            <title>About Us</title>
            <section>
                <h1>This is the About Us section</h1>
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/blog">Blog</Link>
            </section>
            <div>
                <div>
                    <h1>Sam Oberly</h1>
                    <h2>President and Founder</h2>
                </div>
            </div>
        </Head>
        </>
    )
}