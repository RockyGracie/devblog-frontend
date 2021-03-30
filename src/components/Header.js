import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h2>/DevBlog/</h2>
      <nav className="nav">
        <Link to="/" className="links">Home</Link>
        <Link to="/newpost" className="links">New Post</Link>
      </nav>
    </header>
  );
};

export default Header;
