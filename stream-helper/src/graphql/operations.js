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
/**
 * USED FOR VERIFING USERS ON EACH PAGE
 */
const VERIFY = gql`
  query Query {
    verifyUser {
      id
      firstname
      lastname
      username
      email
      password
    }
  }
`;

/**
 * used in
 * "../pages/Profile.js"
 *   */
/*  const UPDATEUSERPROFILE = gql`
 mutation Mutation($updateUserFirstname: String, $updateUserLastname: String, $updateUserEmail: String, $updateUserUsername: String) {
  updateUser(firstname: $updateUserFirstname, lastname: $updateUserLastname, email: $updateUserEmail, username: $updateUserUsername) {
    firstname
    lastname
    username
    email
  }
}
`; */
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
      disliked: $addMovieToUserDisliked
      saved: $addMovieToUserSaved
      watched: $addMovieToUserWatched
    ) {
      id
    }
  }
`;

/* const CHECKCURRENTUSER = gql `
  mutation Mutation($checkCurrentUser)
` */

export {
  SIGNUP,
  LOGIN,
  VERIFY,
  ALLMOVIES,
  LASTMOVIE,
  WATCHEDMOVIES,
  USERUPDATE,
};
