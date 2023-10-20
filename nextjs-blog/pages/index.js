import Head from "next/head";
import Layout, { siteTitle, name } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello! I am <span className={utilStyles.headingLg}>{name}</span>. I am
          a front-end developer. You can contact me on{" "}
          <a href="https://www.linkedin.com/in/hanna-konchakovska/">Linkedin</a>
          . Read <Link href="/posts/first-post">this page!</Link>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
