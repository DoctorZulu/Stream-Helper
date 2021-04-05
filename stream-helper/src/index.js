import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
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
      authorization: localStorage.getItem("uid") || null,
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
  cache: new InMemoryCache(),
  // credentials: "include",
  link: concat(authMiddleware, httpLink),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
