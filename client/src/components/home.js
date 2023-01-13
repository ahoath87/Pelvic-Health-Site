import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import { Link } from "react";

const Home = () => {
  return (
    <div id="home">
      <h1 id="big-title"> Your Virtual Pelvic Healh Guide </h1>
      <p id="site-description">
        {" "}
        Did you know that conclusions that the Doc makes about your diagnosis
        and treatments on visit one are 80% due to your subject description of
        complaints?!{" "}
      </p>
      <div id="home-buttons">
        <p>
          {" "}
          Register and Login to gain access to our diagnosis and treatments
          guided questionaire!{" "}
        </p>
        <button>
          {" "}
          Register
          <Link to="/register">Register Here! </Link>
        </button>
        <button>
          {" "}
          Login
          {/* <Link to="/login">Login Here!</Link> */}
        </button>{" "}
      </div>
    </div>
  );
};

export default Home;
