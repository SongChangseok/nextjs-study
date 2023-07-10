import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import getSortedPostsData from "../lib/posts";

const Home = ({ allPostsData }) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>nextjs test home</p>
      <p>
        (This is a sample website - you’ll be building a site like this on{" "}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
    </section>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className={utilStyles.listItem}>
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

const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;

export { getStaticProps };
