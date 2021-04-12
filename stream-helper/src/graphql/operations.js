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
 * used in
 * "../pages/Profile.js"
 *   */
 const UPDATEUSER = gql`
 mutation Mutation($updateUserUpdateInput: UpdateInput) {
   updateUser(updateInput: $updateUserUpdateInput) {
     firstname
     lastname
     username
     email
     token
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

export { SIGNUP, LOGIN, UPDATEUSER, ALLMOVIES, MOVIE };
