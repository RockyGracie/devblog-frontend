import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Posts from './components/Posts';
import Header from './components/Header';
import NewPost from './components/NewPost';
import PostDetails from './components/PostDetails';
import NotFound from './components/NotFound';

import useFetch from './components/useFetch';

function App() {

  const { data: posts, isLoading, error } = useFetch('http://localhost:3000/posts');

  console.log(error);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <h2 className="title">All Blogs</h2>
            {posts.length > 0 && <Posts posts={posts} />}
            {isLoading && <p>Loading...</p>}
            {error ? (
              <p>{error}</p>
            ) : (
            !isLoading && posts.length === 0 && <p>No posts added.<br/> Create a new one to show.</p>
            )}
          </Route>
          <Route exact path="/newpost">
            <NewPost />
          </Route>
          <Route exact path="/post/:id">
            <PostDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
