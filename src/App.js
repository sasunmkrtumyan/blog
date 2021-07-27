import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import PostCreate from "./components/PostCreate";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("");

  const notify = () =>
    toast.error("All the fields are required!", {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  const addPost = (title, content) => {
    if (!title.trim() || !content.trim()) {
      return notify();
    }
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
            <Route path="/PostCreate">
              <PostCreate addHandler={addPost} />
            </Route>
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
