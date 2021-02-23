import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Users from "./Users";
import Home from "./Home";
import Posts from "./Posts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
