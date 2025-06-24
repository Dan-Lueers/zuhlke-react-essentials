import { Link } from "react-router";

export function MainMenu() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/pokemon">Profile</Link>
    </>
  );
}
