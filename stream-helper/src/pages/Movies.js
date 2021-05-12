import React, { useState } from "react";
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

  const handleNetflixClick = () => {
    providerid.netflix.active
      ? setProviderid({ ...providerid, netflix: { active: false } })
      : setProviderid({ ...providerid, netflix: { active: true } });
  };
  const handleHboMaxClick = () => {
    providerid.hbomax.active
      ? setProviderid({ ...providerid, hbomax: { active: false } })
      : setProviderid({ ...providerid, hbomax: { active: true } });
  };
  const handleHuluClick = () => {
    providerid.hulu.active
      ? setProviderid({ ...providerid, hulu: { active: false } })
      : setProviderid({ ...providerid, hulu: { active: true } });
  };
  const handleAmazonPrimeClick = () => {
    providerid.amazonprime.active
      ? setProviderid({ ...providerid, amazonprime: { active: false } })
      : setProviderid({ ...providerid, amazonprime: { active: true } });
  };

  const handleDisneyClick = () => {
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
      <Nav variant="pills" defaultActiveKey="/home">
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
            onClick={() => {
              handleNetflixClick();
              // setProviderfilter(true);
            }}
            eventKey="link-1"
          >
            {" "}
            <img
              src={`https://www.themoviedb.org/t/p/original/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg`}
              className="providersImage"
              alt="provider stream platform Icon"
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              handleHboMaxClick();
              // setProviderfilter(true);
            }}
            eventKey="link-2"
          >
            {" "}
            <img
              src={`https://www.themoviedb.org/t/p/original/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg`}
              className="providersImage"
              alt="provider stream platform Icon"
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              handleHuluClick();
              // setProviderfilter(true);
            }}
            eventKey="link-3"
          >
            {" "}
            <img
              src={`https://www.themoviedb.org/t/p/original//giwM8XX4V2AQb9vsoN7yti82tKK.jpg`}
              className="providersImage"
              alt="provider stream platform Icon"
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              handleAmazonPrimeClick();
              // setProviderfilter(true);
            }}
            eventKey="link-4"
          >
            {" "}
            <img
              src={`https://www.themoviedb.org/t/p/original/68MNrwlkpF7WnmNPXLah69CR5cb.jpg`}
              className="providersImage"
              alt="provider stream platform Icon"
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              handleDisneyClick();
              // setProviderfilter(true);
            }}
            eventKey="link-5"
          >
            {" "}
            <img
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
