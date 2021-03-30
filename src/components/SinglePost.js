const SinglePost = ({ post }) => {
  return (
    <a href="#" className="post-link">
      <div className="single-post">
        <h3>{post.title}</h3>
        <p>Written by {post.author}</p>
      </div>
    </a>
  );
};

export default SinglePost;
