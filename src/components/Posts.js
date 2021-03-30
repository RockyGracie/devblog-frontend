import SinglePost from './SinglePost';

const Posts = ({ posts }) => {

  return (
    <>
      <h2 className="title">All Blogs</h2>
      <div className="posts">
        {posts.map((post) => (
          <SinglePost key={post.id} post={post} />
        ))}
      </div>
    </>
  )
};

export default Posts;
