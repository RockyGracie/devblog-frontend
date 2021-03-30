import { useState, useEffect } from 'react';

import Posts from './components/Posts';
import Header from './components/Header';

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch('http://localhost:3000/posts');
    const data = await res.json();

    setPosts(data);
  };

  useEffect(() => fetchPosts(), []);

  return (
    <>
      <Header />
      <Posts posts={posts} />
    </>
  );
}

export default App;
