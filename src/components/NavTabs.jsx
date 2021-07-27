import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function NavTabs({ user, handleLogout }) {
  let history = useHistory();

  function handleSignOut(params) {
    history.push("/signin");
    handleLogout();
  }

  return (
    <div className="nav">
      <div className="link">
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/PostCreate">
          <Button>Create post</Button>
        </Link>
      </div>
      <div className="link last-link">
        {user ? (
          <Button onClick={handleSignOut}>Sign Out</Button>
        ) : (
          <Link to="/SignIn">
            <Button>Sign In</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
