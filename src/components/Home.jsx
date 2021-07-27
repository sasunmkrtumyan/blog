import Post from "./Post";

export default function Home({ posts }) {
  console.log(posts);

  return (
    <div className="home">
      <h1>All Posts</h1>
      <div className="wrapper">
        {posts.map((post) => {
          return <Post {...post} />;
        })}
      </div>
    </div>
  );
}
