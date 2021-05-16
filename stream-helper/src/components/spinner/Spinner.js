import React from "react";

import "../../styles/Loader.css";

const Loader = () => {
  return (
    <>
      <div id="menu">
        <div class="container">
          <div class="item white"></div>
          <div class="item yellow"></div>
          <div class="item cyan"></div>
          <div class="item green"></div>
          <div class="item magenta"></div>
          <div class="item red"></div>
          <div class="item blue"></div>
        </div>
      </div>
      <div id="gif">
        <div class="container"></div>
      </div>
    </>
    /*     <div className="loadingMovieDetail">
      <Spinner animation="grow" variant="success" size="xxl" />
      <Spinner animation="grow" variant="success" size="xxl" />
      <Spinner animation="grow" variant="success" size="xxl" />
    </div> */
  );
};

export default Loader;
