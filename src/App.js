import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
    <div className="app">
      <Header />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
