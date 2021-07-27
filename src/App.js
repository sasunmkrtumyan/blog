import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import PostCreate from "./components/PostCreate";
import ProtectedRoute from "./components/ProtectedRoute";
import useLocalStorage from "./customHooks/useLocalStorage";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [user, setUser] = useLocalStorage("user", "");
  const [posts, setPosts] = useLocalStorage("posts", []);

  const addPost = (title, content) => {
    setPosts((prevPosts) => {
      return [...prevPosts, { title, content, user }];
    });
  };

  function handleLogin(username) {
    setUser(username);
  }

  function handleLogout() {
    setUser("");
  }

  return (
    <Router>
      <div className="navbar">
        <NavTabs user={user} handleLogout={handleLogout} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home posts={posts} />
            </Route>
            <ProtectedRoute
              exact
              path="/PostCreate"
              user={user}
              addPost={addPost}
              component={PostCreate}
            />
            <Route path="/PostCreate"></Route>
            <Route path="/SignIn">
              <SignIn handleLogin={handleLogin} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
