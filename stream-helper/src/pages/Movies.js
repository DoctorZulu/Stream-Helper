import React, { useState, useEffect, useReducer } from "react";
import { Nav } from "react-bootstrap";
/* components */
import NavigationBar from "../components/Navbar/NavigationBar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import moviesHeroImage from "../media/moviesHeroImage.jpg";
import CheckUser from "../hooks/checkUser";
import ProvidersHome from "../components/providers/ProvidersHome";

const ACTIONS = {
  ACTIONNETFLIX: "actionnetflixs",
  ACTIONHBOMAX: "actionhbomax",
  ACTIONHULU: "actionhulu",
  ACTIONAMAZONPRIME: "actionamazonprime",
  ACTIONDISNEY: "actiondisney",
};

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
  const [stateProviderId, setStateProviderid] = useState({
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
  const [providersid, dispatch] = useReducer(reducer, stateProviderId);

  function reducer(providersid, action) {
    switch (action.type) {
      case ACTIONS.ACTIONNETFLIX:
        return (
          setStateProviderid({
            ...stateProviderId,
            netflix: { id: action.payload.id, active: !action.payload.active },
          }),
          stateProviderId.netflix.active
            ? setActiveStyleOne("#007bff")
            : setActiveStyleOne("black")
        );
      case ACTIONS.ACTIONHBOMAX:
        return (
          setStateProviderid({
            ...stateProviderId,
            hbomax: { id: action.payload.id, active: !action.payload.active },
          }),
          stateProviderId.hbomax.active
            ? setActiveStyleTwo("#007bff")
            : setActiveStyleTwo("black")
        );
      case ACTIONS.ACTIONHULU:
        return (
          setStateProviderid({
            ...stateProviderId,
            hulu: { id: action.payload.id, active: !action.payload.active },
          }),
          stateProviderId.hulu.active
            ? setActiveStyleThree("#007bff")
            : setActiveStyleThree("black")
        );
      case ACTIONS.ACTIONAMAZONPRIME:
        return (
          setStateProviderid({
            ...stateProviderId,
            amazonprime: {
              id: action.payload.id,
              active: !action.payload.active,
            },
          }),
          stateProviderId.amazonprime.active
            ? setActiveStyleFour("#007bff")
            : setActiveStyleFour("black")
        );
      case ACTIONS.ACTIONDISNEY:
        return (
          setStateProviderid({
            ...stateProviderId,
            disney: { id: action.payload.id, active: !action.payload.active },
          }),
          stateProviderId.disney.active
            ? setActiveStyleFive("#007bff")
            : setActiveStyleFive("black")
        );
      default:
        return { ...providersid };
    }
  }

  const handleNetflixClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({
      type: ACTIONS.ACTIONNETFLIX,
      payload: {
        id: stateProviderId.netflix.id,
        active: stateProviderId.netflix.active,
      },
    });
  };
  const handleHboMaxClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({
      type: ACTIONS.ACTIONHBOMAX,
      payload: {
        id: stateProviderId.hbomax.id,
        active: stateProviderId.hbomax.active,
      },
    });
  };

  const handleHuluClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({
      type: ACTIONS.ACTIONHULU,
      payload: {
        id: stateProviderId.hulu.id,
        active: stateProviderId.hulu.active,
      },
    });
  };
  const handleAmazonPrimeClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({
      type: ACTIONS.ACTIONAMAZONPRIME,
      payload: {
        id: stateProviderId.amazonprime.id,
        active: stateProviderId.amazonprime.active,
      },
    });
  };

  const handleDisneyClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({
      type: ACTIONS.ACTIONDISNEY,
      payload: {
        id: stateProviderId.disney.id,
        active: stateProviderId.disney.active,
      },
    });
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
              handleNetflixClick(e);
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
              // {
              //   providerid.hulu.active === true
              //     ? setActiveStyleThree("black")
              //     : setActiveStyleThree("#007bff");
              // }
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
              // {
              //   providerid.amazonprime.active === true
              //     ? setActiveStyleFour("black")
              //     : setActiveStyleFour("#007bff");
              // }
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
              // {
              //   providerid.disney.active === true
              //     ? setActiveStyleFive("black")
              //     : setActiveStyleFive("#007bff");
              // }
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
      {<ProvidersHome providerid={stateProviderId} />}
    </>
  );
}

export default Movies;
