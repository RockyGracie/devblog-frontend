import { useParams } from 'react-router-dom';

import useFetch from './useFetch';

const PostDetails = () => {

  const { id } = useParams();

  const { data: post, isLoading, error } = useFetch(`http://localhost:3000/posts/${id}`);

  return (
    <div>
      <h2 className="title">Post Details</h2>
      {error && <p>{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        !error &&
        <article className="post-details">
          <h2 className="post-details--title">{post.title}</h2>
          <p className="post-details--author">Written by {post.author}</p>
          <p className="post-details--body">{post.body}</p>
        </article>
      )}
    </div>
  );
};

export default PostDetails;
