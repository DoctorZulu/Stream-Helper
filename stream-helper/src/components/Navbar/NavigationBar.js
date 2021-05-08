import React, { useState, useEffect } from "react";
/* vendor imports */
import { Link } from "react-router-dom";
/* styling */
import "../../styles/NavigationBar.css";
import { Nav, Navbar, Form, FormControl, Dropdown } from "react-bootstrap";
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

  const [movieSearch, { loading, data }] = useLazyQuery(MOVIESEARCH);

  console.log(searchTerm);

  if (results != undefined) {
    console.log(results.movieSearch);
  }
  /* component reqs for Search Bar Feature */

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

  const SearchMapper = () => (
    <>
      {results ? (
        <Dropdown>
          {results.movieSearch.map((movie, i) => (
            <Dropdown.Item {...movie} key={i + 1}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </Dropdown.Item>
          ))}
        </Dropdown>
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
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(e) => onChangeTerm(e)}
            />
          </Form>
          <SearchMapper />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
