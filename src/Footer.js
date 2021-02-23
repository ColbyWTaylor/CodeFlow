import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="Footer">
        <hr />
        <nav>
          <ul className="FooterLinks">
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
    </div>
  );
};

export default Footer;
