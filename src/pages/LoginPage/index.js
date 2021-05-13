import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

function LoginPage({ history }) {
  const { dispatch } = useContext(AuthContext);
  const lastPath = localStorage.getItem("lastPath") || "/";

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name: "Luis Miguel",
        email: "luismiguel@mail.com",
      },
    });

    history.replace(lastPath);
  };

  return (
    <div className="container mt-5">
      <h1>Login Page</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;
