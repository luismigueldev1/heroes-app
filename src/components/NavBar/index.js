import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

function NavBar() {
  const history = useHistory();
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });
    history.replace("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          HeroesApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item ">
              <NavLink
                exact
                to="/dc"
                activeClassName="active"
                className="nav-link"
              >
                DC
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                exact
                to="/marvel"
                activeClassName="active"
                className="nav-link"
              >
                Marvel
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                exact
                to="/search"
                activeClassName="active"
                className="nav-link"
              >
                Search
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item nav-link">
              <span className="text-info">{user.name}</span>
            </li>

            <li className="nav-item">
              <button className="btn btn-secondary" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
