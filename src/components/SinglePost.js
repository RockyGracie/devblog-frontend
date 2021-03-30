import { Link } from 'react-router-dom';

const SinglePost = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="post-link">
      <div className="single-post">
        <h3>{post.title}</h3>
        <p>Written by {post.author}</p>
      </div>
    </Link>
  );
};

export default SinglePost;
