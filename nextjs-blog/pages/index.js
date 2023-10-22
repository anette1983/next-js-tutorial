import Head from "next/head";
import Layout, { siteTitle, name } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// Fetch External API or Query Database
// export async function getSortedPostsData() {
// Instead of the file system,
// fetch post data from an external API endpoint
//   const res = await fetch("..");
//   return res.json();
// }

// query the database directly:

// import someDatabaseSDK from 'someDatabaseSDK'

// const databaseClient = someDatabaseSDK.createClient(...)

// export async function getSortedPostsData() {
//   // Instead of the file system,
//   // fetch post data from a database
//   return databaseClient.query('SELECT posts...')
// }

// Since Static Generation happens once at build time, it's not suitable for data that updates frequently or changes on every user request.

// In cases like this, where your data is likely to change, you can use Server-side Rendering.
// To use Server-side Rendering, you need to export getServerSideProps instead of getStaticProps from your page.
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }

// Next.js has created a React hook for data fetching called SWR. We highly recommend it if you’re fetching data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more.
// import useSWR from "swr";

// function Profile() {
//   const { data, error } = useSWR("/api/user", fetch);

//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;
//   return <div>hello {data.name}!</div>;
// }

export default function Home({ allPostsData }) {
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
