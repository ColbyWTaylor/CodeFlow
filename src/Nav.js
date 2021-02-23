import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <nav>
        <ul className="NavLinks">
          <li>
            <Link to="/">
              <h1>Code Flow</h1>
            </Link>
            <p className="tagline">Code Faster, Healthier, and Smarter</p>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
