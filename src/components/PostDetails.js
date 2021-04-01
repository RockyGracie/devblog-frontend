import { useParams, useHistory } from 'react-router-dom';

import useFetch from './useFetch';

const PostDetails = () => {

  const { id } = useParams();

  const history = useHistory();

  const { data: post, isLoading, error } = useFetch(`http://localhost:5000/posts/${id}`);

  const deleteHandler = () => {
    fetch(`http://localhost:5000/posts/${id}`, { method: 'DELETE' })
      .then(() => history.push('/'));
  };

  return (
    <div>
      <h2 className="title">Post Details</h2>
      {error && <p>{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        !error &&
        <article  rticle className="post-details">
          <h2 className="post-details--title">{post.title}</h2>
          <p className="post-details--author">Written by {post.author}</p>
          <p className="post-details--body">{post.body}</p>
          <button className="delete-btn" onClick={deleteHandler}>Delete Post</button>
        </article>
      )}
    </div>
  );
};

export default PostDetails;
