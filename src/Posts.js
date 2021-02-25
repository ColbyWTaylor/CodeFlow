const Posts = () => {
  const posts = [
    {
      postID: 1,
      name: "Post 1",
      date: "February 23, 2021",
      content: (
        <>
          <h1>Abstraction for Apps</h1>
          <p>
            This is a small thought experiment designed to enhance creativity
            through relative pattern interpretation. This is a process we
            naturally may findo our way through when reaching an "ah-ha!"
            moment, but you can easily speed up the process and benefit from
            this abstraction exercise to a point of developing muscle memory (in
            your mind...).
          </p>
          <h2>Key Party</h2>
          <p>
            This first step is to lock associations together in your mind.
            Counter-intuitive? NO- this is focused. A card will display a
            pattern that you can associate in any matter meaningful to you, so
            if you are looking for ideas starting a song, and the symbols are a
            triangle and square, on the other side the arrangement will provide
            a pattern to incorporate. The shape can be give in any relative,
            meaningful way, and could be used from top down or down to top.
            Assume we are writing a song, and are looking for a focus. You can
            lock the triangle to bass, the square to a counter melody. When you
            view the image, interpret the sequence immediately to your project.
            Now revisit the card, and look for a second mode of interpration,
            different from the first. Apply the inverse (triangle to melody and
            square to bass). Alter the tempo of the interpretation. Reverse the
            order, or only assume every other piece of the pattern. Whatever you
            do, immediately build that sequence and return to force a new idea.
            You could even assign each their own note.
          </p>
          <p>
            The next step is simply to hear the various components you've just
            created. Listen to how the notes join, change, alter. Resist
            changing until you've listened the entire way through.
          </p>
          <h2>Assignment Cards</h2>
          <p>
            Use a card to define the elements you have available: effects on,
            off, intensity, volume, distortion, delay w/d or time, reverb eq,
            length, stereo image etc.
          </p>
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
