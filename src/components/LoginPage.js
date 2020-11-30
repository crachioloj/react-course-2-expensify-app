import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="layout__title">Boilerplate</h1>
        <p>Tagline for app</p>
        <button onClick={startLogin}>Log In with Google</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

// export default LoginPage;