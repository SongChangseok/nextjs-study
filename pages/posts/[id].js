import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

const getStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
};

const Post = ({ postData }) => (
  <Layout>
    {postData.title}
    <br />
    {postData.id}
    <br />
    {postData.date}
    <br />
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </Layout>
);

export { getStaticPaths, getStaticProps };

export default Post;
