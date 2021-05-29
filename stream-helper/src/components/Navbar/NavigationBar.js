import React, { useState, useEffect } from "react";
/* vendor imports */
import { Link } from "react-router-dom";
/* styling */
import "../../styles/NavigationBar.css";
import { Nav, Navbar, Form, FormControl, Spinner } from "react-bootstrap";

/* import { SearchPanel } from "react-search-panel"; */
/* import userState from Recoil */
import { userState } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";

import { useLazyQuery } from "@apollo/client";
import { MOVIESEARCH } from "../../graphql/operations";

function NavigationBar() {
  const [user, setUser] = useRecoilState(userState);
  const [searchTerm, setSearchTerm] = useState(undefined);
  const [results, setResults] = useState();

  const [movieSearch, { loading, data }] = useLazyQuery(MOVIESEARCH, {
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (searchTerm != undefined) {
      if (data && !loading) {
        setResults(data);
      }
    }
  }, [data, loading]);

  const onChangeTerm = (e) => {
    setSearchTerm(e.target.value);
    movieSearch({ variables: { movieSearchMovieTitle: searchTerm } });
  };

  const onClickLink = () => {
    setSearchTerm(undefined);
  };

  const SearchMapper = () => (
    <>
      {results ? (
        <div className="searchBarContainer">
          {results.movieSearch.map((movie, i) => (
            <div className="searchBarBlock">
              <Link to={`/movie/${movie.id}`}>
                <div
                  {...movie}
                  key={i + 1}
                  className="searchBarResults"
                  onClick={onClickLink}
                >
                  {movie.title}
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="mainNavBar"
        sticky="top"
      >
        <Link to={"/home"}>
          <Navbar.Brand>FlixAlways</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to={"/home"}>
              <Nav.Item className="buttonStyle"> Home </Nav.Item>
            </Link>

            <Link to={"/movies"}>
              <Nav.Item className="buttonStyle"> Movies </Nav.Item>
            </Link>

            <Link to={"/watched"}>
              <Nav.Item className="buttonStyle"> Watched </Nav.Item>
            </Link>

            <Link to={"/saved"}>
              <Nav.Item className="buttonStyle"> My Saved Movies </Nav.Item>
            </Link>
          </Nav>
          <Link to={`/profile/${user && user.id}`}>
            <Nav.Item className="buttonStyle"> Profile </Nav.Item>
          </Link>
          <Form inline className="searchBarForm">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(e) => onChangeTerm(e)}
            />
            <SearchMapper />
          </Form>
          {user ? (
            <Link to={""}>
              <Nav.Item className="buttonStyle"> Log Out </Nav.Item>
            </Link>
          ) : null}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
