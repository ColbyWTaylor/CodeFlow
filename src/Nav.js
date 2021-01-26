import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <h1>Navigation</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
