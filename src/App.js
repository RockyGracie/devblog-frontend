import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Posts from './components/Posts';
import Header from './components/Header';
import NewPost from './components/NewPost';
import PostDetails from './components/PostDetails';

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch('http://localhost:3000/posts');
    const data = await res.json();

    setPosts(data);
  };

  useEffect(() => fetchPosts(), []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Posts posts={posts} />
          </Route>
          <Route exact path="/newpost">
            <NewPost />
          </Route>
          <Route exact path="/post/:id">
            <PostDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
