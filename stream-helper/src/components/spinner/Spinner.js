import React from "react";

const Spinner = () => {
  return (
    <div className="loadingMovieDetail">
      <Spinner animation="grow" variant="success" size="xxl" />
      <Spinner animation="grow" variant="success" size="xxl" />
      <Spinner animation="grow" variant="success" size="xxl" />
    </div>
  );
};

export default Spinner;
