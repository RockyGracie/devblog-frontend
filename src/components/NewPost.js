import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewPost = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    setIsPosting(true);

    const blog = { title, author, body }

    fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPosting(false);
      history.push('/');
    });
  };

  return (
    <>
      <h2 className="title">Create a New Post</h2>
      <form
        className="form"
        onSubmit={submitHandler}
      >
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            required
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="author">Author</label>
          <input
            required
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Body</label>
          <textarea
            required
            id="body"
            cols="30"
            rows="10"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="form-control--button">
          {!isPosting ? (
            <button
              type="submit"
            >Add Post</button>
          ) : (
            <button
              type="submit"
              className="posting"
            >Posting...</button>
          )}
        </div>
      </form>
    </>
  );
};

export default NewPost;
