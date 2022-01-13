import axios from "axios";

const IndexBlog = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((data, index) => (
          <li key={index}>
              <a href={`/blog/${data.id}`}>{data.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps(context) {
  let posts;
  const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
  posts = data.data;

  return {
    props: { posts }, // will be passed to the page component as props
  };
}

export default IndexBlog;
