import Head from "next/head"
import Link from "next/link"
export default function Home() {
    return (
        <>
        <Head>
            <title>Home</title>
        </Head>
        <section>
            <navbar>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/blog">Blog</Link>
            </navbar>
            <h1>The Student-Industry Partnership</h1>
            <p>
                We are dedicated to connecting promising students to ambitious industry projects
                to facilitate the transition between academia and real-world applications.
            </p>
        </section>
        </>
        
    );
}