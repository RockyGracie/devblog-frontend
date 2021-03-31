import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Posts from './components/Posts';
import Header from './components/Header';
import NewPost from './components/NewPost';
import PostDetails from './components/PostDetails';
import NotFound from './components/NotFound';

import useFetch from './components/useFetch';

function App() {

  const { data: posts, isLoading, error } = useFetch('http://localhost:3000/posts');

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Posts posts={posts} />
            {!isLoading && posts.length === 0 ? <p>No posts added.<br/> Create a new one to show.</p> : ''}
            {isLoading && <p>Loading...</p>}
            <p>{error}</p>
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
