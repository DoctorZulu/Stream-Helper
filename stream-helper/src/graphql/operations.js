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

// ================================= MOVIES ================================

/**
 * used in Homepage
 * ../pages/Homepage.js
 */

const ALLMOVIES = gql`
  query Query(
    $allMoviesTake: Int
    $allMoviesSkip: Int
    $allMoviesMyCursor: Int
  ) {
    allMovies(
      take: $allMoviesTake
      skip: $allMoviesSkip
      myCursor: $allMoviesMyCursor
    ) {
      id
      title
      original_language
      release_date
      runtime
      vote_average
      overview
      image
      categoryId
      genres {
        id
        name
      }
    }
  }
`;

/**
 * Last movie for paganation used in homepage
 */
const LASTMOVIE = gql`
  query Query {
    lastMovie {
      id
      categoryId
    }
  }
`;

const WATCHEDMOVIES = gql`
  query Query {
    watchedMovies {
      id
      title
      image
      liked
      watched
      saved
    }
  }
`;

const USERUPDATE = gql`
  mutation Mutation(
    $addMovieToUserMovieId: ID
    $addMovieToUserDisliked: Boolean
    $addMovieToUserSaved: Boolean
    $addMovieToUserWatched: Boolean
  ) {
    addMovieToUser(
      movieId: $addMovieToUserMovieId
      liked: $addMovieToUserLiked
      disliked: $addMovieToUserDisliked
      saved: $addMovieToUserSaved
      watched: $addMovieToUserWatched
    ) {
      id
    }
  }
`;
/*    mutation Mutation(
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
  }  */

export { SIGNUP, LOGIN, ALLMOVIES, LASTMOVIE, WATCHEDMOVIES, USERUPDATE };
