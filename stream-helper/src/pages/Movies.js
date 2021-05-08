import React, { useState } from "react";
import { Nav } from "react-bootstrap";
/* components */
import NavigationBar from "../components/Navbar/NavigationBar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import MainProviders from "../components/providers/MainProviders";
import moviesHeroImage from "../media/moviesHeroImage.jpg";
import CheckUser from "../hooks/checkUser";
function Movies({ history }) {
  /* Hero banner content */
  const heroTitle = "Welcome To FlixAlways";
  const heroText = "These Movies Will Update As You Use FlixAlways";
  const [isLoading, setIsLoading] = useState(true);
  const mainImage = { moviesHeroImage };
  const [providerfilter, setProviderfilter] = useState(false);
<<<<<<< HEAD
  const [providerid, setProviderid] = useState(0);
  const [changedPage, setChangedPage ] = useState(false);



  const { loading: loadingAll, data: dataAll, fetchMore } = useQuery(
    USERMOVIERECOMMENDATIONS,
    {
      variables: {
        userMovieRecommendationsTake: take,
        userMovieRecommendationsSkip: skip,
        userMovieRecommendationsMyCursor: cursor,
      },
    }
  );

  useEffect(() => {
    if (loadingAll === false && dataAll) {
     
      setUserMovieRecommendations(dataAll.userMovieRecommendations);
    }
    if (userMovieRecommendations) {
      setCursor(
        userMovieRecommendations[userMovieRecommendations.length - 1].categoryId
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingAll, dataAll, providerid]);

 

  const bigFetch = () => {
    fetchMore(
      {
        variables: {
          userMovieRecommendationsMyCursor: userMovieRecommendations.length,
        },
      },
      setCursor(
        userMovieRecommendations[userMovieRecommendations.length - 1]
          .categoryId,
      ),
      
    );
  };
=======
  const [providerid, setProviderid] = useState();
>>>>>>> f44c61a519d688ac48699ffbc3eaa9f939569458

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
              setProviderfilter(false);
            }}
            href="/home"
          >
            Show All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setProviderid(8);
              setProviderfilter(true);
              setChangedPage(true);
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
              setProviderid(384);
              setProviderfilter(true);
              setChangedPage(true);
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
              setProviderid(15);
              setProviderfilter(true);
              setChangedPage(true);
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
              setProviderid(9);
              setProviderfilter(true);
              setChangedPage(true);
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
              setProviderid(337);
              setProviderfilter(true);
              setChangedPage(true);
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
      <MainProviders providerid={providerid} />
    </>
  );
}

export default Movies;
