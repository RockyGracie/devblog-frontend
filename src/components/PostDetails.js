import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {

  const { id } = useParams();

  const [post, setPost] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch(`http://localhost:3000/posts/${id}`);
    const data = await res.json();

    setPost(data);
  };
  useEffect(() => fetchPosts(), [fetchPosts]);


  return (
    <div>
      <h2 className="title">Post Details</h2>
      <article className="post-details">
        <h2 className="post-details--title">{post.title}</h2>
        <p className="post-details--author">Written by {post.author}</p>
        <p className="post-details--body">{post.body}</p>
      </article>
    </div>
  );
};

export default PostDetails;
