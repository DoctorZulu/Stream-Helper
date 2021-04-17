import React from "react";
import ReactDOM from "react-dom";
import Cookies from "js-cookie";
import { RecoilRoot } from "recoil";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  concat,
  ApolloLink,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "http://localhost:4025/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: Cookies.get("cookie") || null,
      // cookie: null,
    },
    // looking to gather the cookie
    fetchOptions: {
      credentials: "include",
    },
  });

  return forward(operation);
});
// testing

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allMovies: {
            keyArgs: ["type"],
            merge(existing = [], incoming = []) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
  link: concat(authMiddleware, httpLink),
});
console.log(Cookies.get("cookie"));
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
