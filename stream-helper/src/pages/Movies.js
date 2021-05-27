import React, { useReducer } from "react";
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
  ACTIONSHOWALL: "actionshowall",
};

function movieReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ACTIONNETFLIX:
      return {
        ...state,
        netflix: { id: state.netflix.id, active: !state.netflix.active },
      };
    case ACTIONS.ACTIONHBOMAX:
      return {
        ...state,
        hbomax: { id: state.hbomax.id, active: !state.hbomax.active },
      };
    case ACTIONS.ACTIONHULU:
      return {
        ...state,
        hulu: { id: state.hulu.id, active: !state.hulu.active },
      };
    case ACTIONS.ACTIONAMAZONPRIME:
      return {
        ...state,
        amazonprime: {
          id: state.amazonprime.id,
          active: !state.amazonprime.active,
        },
      };
    case ACTIONS.ACTIONDISNEY:
      return {
        ...state,
        disney: { id: state.disney.id, active: !state.disney.active },
      };
    case ACTIONS.ACTIONSHOWALL:
      return initialState;
    default:
      return { ...state };
  }
}

const initialState = {
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
};
function Movies({ history }) {
  /* Hero banner content */
  const heroTitle = "Welcome To FlixAlways";
  const heroText = "These Movies Will Update As You Use FlixAlways";
  // const [isLoading, setIsLoading] = useState(true);
  const mainImage = { moviesHeroImage };
  const [state, dispatch] = useReducer(movieReducer, initialState);

  const handleShowall = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({ type: ACTIONS.ACTIONSHOWALL });
  };

  const handleNetflixClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({
      type: ACTIONS.ACTIONNETFLIX,
    });
  };
  const handleHboMaxClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({
      type: ACTIONS.ACTIONHBOMAX,
    });
  };

  const handleHuluClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({
      type: ACTIONS.ACTIONHULU,
    });
  };
  const handleAmazonPrimeClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({
      type: ACTIONS.ACTIONAMAZONPRIME,
    });
  };

  const handleDisneyClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({
      type: ACTIONS.ACTIONDISNEY,
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
            onClick={(e) => {
              handleShowall(e);
            }} 
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
              style={{
                backgroundColor: state.netflix.active ? "#007bff" : "black",
              }}
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
            }}
          >
            {" "}
            <img
              style={{
                backgroundColor: state.hbomax.active ? "#007bff" : "black",
              }}
              src={`https://www.themoviedb.org/t/p/original/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg`}
              className="providersImage"
              alt="provider stream platform Icon"
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={(e) => {
              handleHuluClick(e);
            }}
          >
            {" "}
            <img
              style={{
                backgroundColor: state.hulu.active ? "#007bff" : "black",
              }}
              src={`https://www.themoviedb.org/t/p/original//giwM8XX4V2AQb9vsoN7yti82tKK.jpg`}
              className="providersImage"
              alt="provider stream platform Icon"
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={(e) => {
              handleAmazonPrimeClick(e);
            }}
          >
            {" "}
            <img
              style={{
                backgroundColor: state.amazonprime.active ? "#007bff" : "black",
              }}
              src={`https://www.themoviedb.org/t/p/original/68MNrwlkpF7WnmNPXLah69CR5cb.jpg`}
              className="providersImage"
              alt="provider stream platform Icon"
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={(e) => {
              handleDisneyClick(e);
            }}
          >
            {" "}
            <img
              style={{
                backgroundColor: state.disney.active ? "#007bff" : "black",
              }}
              src={`https://www.themoviedb.org/t/p/original/dgPueyEdOwpQ10fjuhL2WYFQwQs.jpg`}
              className="providersImage"
              alt="provider stream platform Icon"
            />
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <ProvidersHome providerid={state} />
    </>
  );
}

export default Movies;
