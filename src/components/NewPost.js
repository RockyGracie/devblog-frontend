const NewPost = () => {
  return (
    <>
      <h2 className="title">Create a New Post</h2>
      <form className="form">
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
        </div>
        <div className="form-control">
          <label htmlFor="author">Author</label>
          <input type="text" id="author" />
        </div>
        <div className="form-control">
          <label htmlFor="body">Body</label>
          <textarea id="body" cols="30" rows="10" />
        </div>
        <div className="form-control--button">
          <button type="submit">Add Post</button>
        </div>
      </form>
    </>
  );
};

export default NewPost;
