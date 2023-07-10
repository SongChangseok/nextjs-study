import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Image
          src="/images/profile.jpg"
          height={144}
          width={144}
          alt="cssong"
        />
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
};

export default FirstPost;
