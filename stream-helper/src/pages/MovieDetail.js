import React, { useEffect, useState } from "react";
/* component imports */
import NavigationBar from "../components/Navbar/NavigationBar";
/* gql */
import { useQuery } from "@apollo/client";
import { MOVIEDETAIL } from "../graphql/operations";
/* vendor styles */
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "../styles/MovieDetail.css";
import ActionButtons from "../components/ActionButtons/ActionButtons";
import CreditCard from "../components/CreditCardLOL/CreditCard";
import {
  Providers,
  ProvidersBuy,
  // ProvidersRent,
} from "../components/providers/Providers";
import SimilarMovieCard from "../components/MovieCard/SimilarMovieCard";
import MovieTrailer from "../components/MovieTrailer/MovieTrailer";
import { StarFill } from "react-bootstrap-icons";
function MovieDetail(props) {
  const [currentMovieDetails, setCurrentMovieDetails] = useState();
  const [currentMovieId, setCurrentMovieId] = useState(props.match.params.id);
  const [creditsParse, setCreditsParse] = useState({});
  const [providers, setProviders] = useState();
  const [cast, setCast] = useState();
  const [crew, setCrew] = useState();
  const [genre, setGenre] = useState();
  const [currentMovieBackground, setCurrentMovieBackground] = useState();
  const [currentMovieUrl, setCurrentMovieUrl] = useState();
  const { loading, data, error, refetch } = useQuery(MOVIEDETAIL, {
    variables: {
      movieMovieId: currentMovieId,
    },
  });
  console.log(props.match.params.id);
  useEffect(() => {
    if (!loading && data) {
      setCurrentMovieDetails(data);
      if(data.movie.credits) {
        setCreditsParse(JSON.parse(data.movie.credits[0].cast));
      }
      if (data.movie.backdrop){
        setCurrentMovieBackground(
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.movie.backdrop}`.replace(
            /['"]+/g,
            "",
          ),
        );
      }
      if (data.movie.watchproviders[0]) {
        setProviders(JSON.parse(data.movie.watchproviders[0].providers));
      }
      /*    if (data.movie.backdrop) {
        setCurrentMovieBackground(currentMovieDetails.movie.backdrop)
      } */
    }
    if (currentMovieId != props.match.params.id) {
      setCurrentMovieId(props.match.params.id);
    }
  }, [data, loading, props.history.location.pathname]);
  /*   useEffect(() => {
    () => {
      refetch();
    };
    console.log(data, "BALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLAR REFRESH");
  }, [props.history.location.pathname]); */
  console.log(currentMovieBackground, "BACKDROP");
  useEffect(() => {
    if (creditsParse.cast) {
      setCast(creditsParse.cast);
      setCrew(creditsParse.crew);
    }
    if (currentMovieDetails) {
      if (currentMovieDetails.movie.genres === 28) {
        setGenre("Action");
      } else if (currentMovieDetails.movie.genres === 12) {
        setGenre("Adventure");
      } else if (currentMovieDetails.movie.genres === 16) {
        setGenre("Animation");
      } else if (currentMovieDetails.movie.genres === 35) {
        setGenre("Comedy");
      } else if (currentMovieDetails.movie.genres === 80) {
        setGenre("Crime");
      } else if (currentMovieDetails.movie.genres === 99) {
        setGenre("Documentary");
      } else if (currentMovieDetails.movie.genres === 18) {
        setGenre("Drama");
      } else if (currentMovieDetails.movie.genres === 10751) {
        setGenre("Family");
      } else if (currentMovieDetails.movie.genres === 14) {
        setGenre("Fantasy");
      } else if (currentMovieDetails.movie.genres === 36) {
        setGenre("History");
      } else if (currentMovieDetails.movie.genres === 27) {
        setGenre("Horror");
      } else if (currentMovieDetails.movie.genres === 10402) {
        setGenre("Musical");
      } else if (currentMovieDetails.movie.genres === 9648) {
        setGenre("Mystery");
      } else if (currentMovieDetails.movie.genres === 10749) {
        setGenre("Romance");
      } else if (currentMovieDetails.movie.genres === 878) {
        setGenre("Science Fiction");
      } else if (currentMovieDetails.movie.genres === 10770) {
        setGenre("TV Movie");
      } else if (currentMovieDetails.movie.genres === 53) {
        setGenre("Thriller");
      } else if (currentMovieDetails.movie.genres === 10752) {
        setGenre("War");
      } else if (currentMovieDetails.movie.genres === 37) {
        setGenre("Western");
      }
    }
  }, [creditsParse]);
  const Mapper = () => (
    <>
      {cast ? (
        <>
          {cast.map((actor, i) => (
            <div className="creditUniqueDetail">
              <CreditCard {...actor} key={i + 1} />
            </div>
          ))}
        </>
      ) : (
        <> </>
      )}
    </>
  );

  const SimilarMovieMapper = () => (
    <>
      {currentMovieDetails.movie.similarMovies ? (
        <>
          {currentMovieDetails.movie.similarMovies.map((similarMovie, i) => (
            <>
              <SimilarMovieCard similarMovie={similarMovie} />
            </>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <>
      <NavigationBar />
      {currentMovieDetails ? (
        <>
          <Container className="mainMovieDetailContainer">
            <Row className="movieDetailsBox">
              {/* SECTION: movie image/rating/base info */}
              <Col>
                <img
                  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${currentMovieDetails.movie.image}`}
                  className="movieDetailImageCard"
                />
                <div className="movieDetailRatings">
                  <div className="movieDetailActionBox">
                    <ActionButtons currentMovieDetails={currentMovieDetails} />
                  </div>
                  <br />
                  <br />
                  <h4>
                    {" "}
                    Rating: <StarFill />{" "}
                    {currentMovieDetails.movie.vote_average}
                  </h4>
                  <h5>Genre: {genre}</h5>
                  <h5>
                    {" "}
                    Original Language:{" "}
                    {currentMovieDetails.movie.original_language}
                  </h5>
                  <h5>
                    {" "}
                    Release Date: {currentMovieDetails.movie.release_date}
                  </h5>
                </div>
              </Col>
              {/* SECTION: Movie description/cast/runtime/watchproviders */}
              <div className="movieDetailContent">
                <div className="streamProviderContainer">
                  <p> Watch Now On:</p>
                  <div className="streamProviderBox">
                    <Row>
                      <Col>
                        {providers ? (
                          <Providers providers={providers} />
                        ) : (
                          <h5 className="unavailable">
                            {" "}
                            Currently Unavailable
                          </h5>
                        )}
                      </Col>
                      <Col>
                        {providers ? (
                          <ProvidersBuy providers={providers} />
                        ) : (
                          <> </>
                        )}
                      </Col>
                    </Row>
                    {/* <ProvidersRent providers={providers} /> */}
                  </div>
                </div>
                <h2> {currentMovieDetails.movie.title}</h2>
                <h5 style={{ width: "100%" }}>
                  {" "}
                  Synopsis: {currentMovieDetails.movie.overview}
                </h5>
                {/* <h4> Total Runtime: {currentMovieDetails.movie.runtime} </h4> */}
                {/* this is the trailer  */}
                {currentMovieDetails.movie.trailers1 && (
                  <MovieTrailer currentMovieDetails={currentMovieDetails} />
                )}
              </div>

              {/* SECTION: similar movie card */}
              <div className="similarMoviesTitle">
                <h4 style={{ color: "whitesmoke", marginTop: "20px" }}>
                  Similar Movies:{" "}
                </h4>
              </div>
              <div className="similarMovieContainer">
                {currentMovieDetails.movie.similarMovies ? (
                  <SimilarMovieMapper />
                ) : null}
              </div>

              {/* END SECTION */}

              <h4
                style={{
                  color: "whitesmoke",
                  marginTop: "50px",
                  marginLeft: "15px",
                }}
              >
                Cast &amp; Crew:{" "}
              </h4>
              <div className="movieDetailCast">
                {cast && crew ? <Mapper /> : null}
              </div>
            </Row>
            {/*    { currentMovieDetails.movie.backdrop && <div className="mainMovieBackground" style={{backgroundImage: `url(${currentMovieBackground})`}}>
            </div>} */}
            {currentMovieDetails.movie.backdrop && (
              <img
                src={currentMovieBackground}
                className="mainMovieBackground"
              />
            )}
          </Container>
        </>
      ) : (
        <div className="loadingMovieDetail">
          <Spinner animation="grow" variant="success" size="xxl" />
          <Spinner animation="grow" variant="success" size="xxl" />
          <Spinner animation="grow" variant="success" size="xxl" />
        </div>
      )}
    </>
  );
}
export default MovieDetail;
