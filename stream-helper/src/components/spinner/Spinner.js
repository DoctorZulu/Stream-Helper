import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="loadingMovieDetail">
      <Spinner animation="grow" variant="success" size="xxl" />
      <Spinner animation="grow" variant="success" size="xxl" />
      <Spinner animation="grow" variant="success" size="xxl" />
    </div>
  );
};

export default Loader;
