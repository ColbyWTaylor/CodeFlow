const Posts = () => {
  const posts = [
    {
      postID: 1,
      name: "Post 1",
      date: "February 23, 2021",
      content: (
        <>
          <p>here is the next text</p>
          <p>here is the next next text text</p>
          <p>here here now here is the next text</p>
        </>
      ),
    },
    {
      postID: 2,
      name: "Post 2",
      date: "February 24, 2021",
      content: <p>here is the next text</p>,
    },
  ];

  return (
    <div className="nav">
      <h1>Posts</h1>
      <p>Here are a list of Posts</p>
      {posts.map((post, index) => (
        <div key={post.id}>
          <h2>
            {post.name} | {post.date}
          </h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
