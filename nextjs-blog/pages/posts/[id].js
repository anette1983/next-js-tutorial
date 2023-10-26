import Layout from "../../components/layout";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";


// to dynamically create product pages with the path pages/products/[id].js, where [id] refers to a specific product ID. What is the correct way to implement this?

// Use `getStaticPaths` to fetch an array of product IDs and use `getStaticProps` to fetch data for each product.

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// In development (npm run dev or yarn dev), getStaticPaths runs on every request.
// In production, getStaticPaths runs at build time.

// export default function Post({ postData }) {
//   return (
//     <Layout>
//       {postData.title}
//       <br />
//       {postData.id}
//       <br />
//       {postData.date}
//     </Layout>
//   );
// }

// http://localhost:3000/posts/ssg-ssr
// http://localhost:3000/posts/pre-rendering

// export default function Post({ postData }) {
//   return (
//     <Layout>
//       <Head>
//         <title>{postData.title}</title>
//       </Head>
//       {/* {postData.title} */}
//       <br />
//       {postData.id}
//       <br />
//       {/* {postData.date} */}
//       <Date dateString={postData.date} />
//       <br />
//       <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//     </Layout>
//   );
// }
// now we can see the blog content

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

// added css
