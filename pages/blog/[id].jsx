import axios from "axios";
import { useEffect } from "react";

const IdBlog = ({ post, params, query }) => {
  useEffect(() => {
    console.log(post);
  }, []);
  return (
    <div>
      <p>{post.body}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const params = context.params;
  const query = context.query;
  let post;
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    .then((res) => {
      post = res.data;
    })
    .catch((err) => {
      console.log(1);
    });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post, params, query }, // will be passed to the page component as props
  };
}

export default IdBlog;
