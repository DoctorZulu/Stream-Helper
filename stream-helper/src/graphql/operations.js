import { gql } from "@apollo/client";

// ================================= USERS ================================
/**
 * used in
 * "../pages/LandingPage.js"
 *   */
const SIGNUP = gql`
  mutation Mutation($signupUserSignupInput: SignupInput) {
    signupUser(signupInput: $signupUserSignupInput) {
      id
      firstname
      lastname
      username
      email
      token
    }
  }
`;
/**
 * used in
 * "../pages/LandingPage.js"
 *   */
const LOGIN = gql`
  mutation Mutation($signinUserEmail: String!, $signinUserPassword: String!) {
    signinUser(email: $signinUserEmail, password: $signinUserPassword) {
      id
    }
  }
`;

const ALLMOVIES = gql`
  query Query {
    allMovies {
      id
      title
      original_language
      release_date
      runetime
      vote_average
      overview
      image
      genres {
        id
        name
      }
    }
  }
`;

const MOVIE = gql`
  query Query($movieMovieId: ID!) {
    movie(movieId: $movieMovieId) {
      id
      title
      original_language
      release_date
      runetime
      vote_average
      overview
      image
      genres {
        id
        name
      }
    }
  }
`;

const USERUPDATE = gql`
  mutation Mutation(
    $addMovieToUserMovieId: ID
    $addMovieToUserLiked: Boolean
    $addMovieToUserSaved: Boolean
    $addMovieToUserWatched: Boolean
  ) {
    addMovieToUser(
      movieId: $addMovieToUserMovieId
      liked: $addMovieToUserLiked
      saved: $addMovieToUserSaved
      watched: $addMovieToUserWatched
    ) {
      movies {
        saved
        watched
        liked
        id
      }
    }
  }
`;

export { SIGNUP, LOGIN, ALLMOVIES, MOVIE, USERUPDATE };
