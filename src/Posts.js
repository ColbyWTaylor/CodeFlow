const Posts = () => {
  const posts = [
    {
      postID: 1,
      name: "Post 1",
      content: "<p>here is the text</p>",
    },
    {
      postID: 2,
      name: "Post 2",
      content: "<p>here is the text</p>",
    },
  ];

  return (
    <div className="nav">
      <h1>Posts</h1>
      <p>Here are a list of Posts</p>
      {posts.map((post, index) => (
        <div key={post.id}>
          <h2>{post.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Posts;
