import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <hr />
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
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <p>Copyright 2021</p>
    </div>
  );
};

export default Footer;
