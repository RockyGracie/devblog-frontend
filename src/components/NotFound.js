import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Error 404</h2>
      <p>This page does not exists.</p>
      <Link to="/">
        <i class="fas fa-long-arrow-alt-left"></i>
        Go back to home page.
      </Link>
    </div>
  );
};

export default NotFound;
