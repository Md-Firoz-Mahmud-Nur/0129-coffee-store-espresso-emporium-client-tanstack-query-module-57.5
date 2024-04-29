import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/">home</NavLink>
      <NavLink to="/users">users</NavLink>
      <NavLink to="/signUp">sign up</NavLink>
      <NavLink to="/">home</NavLink>
    </div>
  );
};

export default Header;
