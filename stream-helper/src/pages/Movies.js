import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
/* components */
import NavigationBar from "../components/Navbar/NavigationBar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import moviesHeroImage from "../media/moviesHeroImage.jpg";
import CheckUser from "../hooks/checkUser";
import ProvidersHome from "../components/providers/ProvidersHome";
function Movies({ history }) {
  /* Hero banner content */
  const heroTitle = "Welcome To FlixAlways";
  const heroText = "These Movies Will Update As You Use FlixAlways";
  const [isLoading, setIsLoading] = useState(true);
  const [activeStyleOne, setActiveStyleOne] = useState("black");
  const [activeStyleTwo, setActiveStyleTwo] = useState("black");
  const [activeStyleThree, setActiveStyleThree] = useState("black");
  const [activeStyleFour, setActiveStyleFour] = useState("black");
  const [activeStyleFive, setActiveStyleFive] = useState("black");
  const mainImage = { moviesHeroImage };
  const [providerid, setProviderid] = useState({
    netflix: {
      id: 8,
      active: false,
    },
    hbomax: {
      id: 384,
      active: false,
    },
    hulu: {
      id: 15,
      active: false,
    },
    amazonprime: {
      id: 9,
      active: false,
    },
    disney: {
      id: 337,
      active: false,
    },
  });

  const handleNetflixClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    providerid.netflix.active
      ? setProviderid({ ...providerid, netflix: { active: false } })
      : setProviderid({ ...providerid, netflix: { active: true } });
  };
  const handleHboMaxClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    providerid.hbomax.active
      ? setProviderid({ ...providerid, hbomax: { active: false } })
      : setProviderid({ ...providerid, hbomax: { active: true } });
  };

  const handleHuluClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    providerid.hulu.active
      ? setProviderid({ ...providerid, hulu: { active: false } })
      : setProviderid({ ...providerid, hulu: { active: true } });
  };
  const handleAmazonPrimeClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    providerid.amazonprime.active
      ? setProviderid({ ...providerid, amazonprime: { active: false } })
      : setProviderid({ ...providerid, amazonprime: { active: true } });
  };

  const handleDisneyClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    providerid.disney.active
      ? setProviderid({ ...providerid, disney: { active: false } })
      : setProviderid({ ...providerid, disney: { active: true } });
  };
  return (
    <>
      <NavigationBar />
      <CheckUser history={history} />
      <HeroBanner
        heroText={heroText}
        heroTitle={heroTitle}
        mainImage={mainImage}
        history={history}
      />
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              // setProviderfilter(false);
            }}
            href="/home"
          >
            Show All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={(e) => {
              {
                providerid.netflix.active === true
                  ? setActiveStyleOne("black")
                  : setActiveStyleOne("#007bff");
              }
              handleNetflixClick(e);
              // setProviderfilter(true);
            }}
          >
            {" "}
            <img
              style={{ backgroundColor: activeStyleOne }}
              src={`https://www.themoviedb.org/t/p/original/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg`}
              className="providersImage"
              alt="provider stream platform Icon"
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={(e) => {
              {
                providerid.hbomax.active === true
                  ? setActiveStyleTwo("black")
                  : setActiveStyleTwo("#007bff");
              }
              handleHboMaxClick(e);
              // setProviderfilter(true);
            }}
          >
            {" "}
            <img
              style={{ backgroundColor: activeStyleTwo }}
              src={`https://www.themoviedb.org/t/p/original/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg`}
              className="providersImage"
              alt="provider stream platform Icon"
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={(e) => {
              {
                providerid.hulu.active === true
                  ? setActiveStyleThree("black")
                  : setActiveStyleThree("#007bff");
              }
              handleHuluClick(e);
              // setProviderfilter(true);
            }}
          >
            {" "}
            <img
              style={{ backgroundColor: activeStyleThree }}
              src={`https://www.themoviedb.org/t/p/original//giwM8XX4V2AQb9vsoN7yti82tKK.jpg`}
              className="providersImage"
              alt="provider stream platform Icon"
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={(e) => {
              {
                providerid.amazonprime.active === true
                  ? setActiveStyleFour("black")
                  : setActiveStyleFour("#007bff");
              }
              handleAmazonPrimeClick(e);
              // setProviderfilter(true);
            }}
          >
            {" "}
            <img
              style={{ backgroundColor: activeStyleFour }}
              src={`https://www.themoviedb.org/t/p/original/68MNrwlkpF7WnmNPXLah69CR5cb.jpg`}
              className="providersImage"
              alt="provider stream platform Icon"
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={(e) => {
              {
                providerid.disney.active === true
                  ? setActiveStyleFive("black")
                  : setActiveStyleFive("#007bff");
              }
              handleDisneyClick(e);
              // setProviderfilter(true);
            }}
          >
            {" "}
            <img
              style={{ backgroundColor: activeStyleFive }}
              src={`https://www.themoviedb.org/t/p/original/dgPueyEdOwpQ10fjuhL2WYFQwQs.jpg`}
              className="providersImage"
              alt="provider stream platform Icon"
            />
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {<ProvidersHome providerid={providerid} />}
    </>
  );
}

export default Movies;
