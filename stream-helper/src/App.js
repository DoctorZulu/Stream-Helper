import routes from './config/routes';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4025",
  headers: {
    authorization: localStorage.uid,
    // authorization: localStorage.getItem("uid") || "",
  },
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
});



function App() {
  return (
    <>
     { routes }
    </>
  );
}

export default App;
