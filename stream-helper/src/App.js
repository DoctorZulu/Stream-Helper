import routes from './config/routes';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";





function App() {
  return (
    <>
     { routes }
    </>
  );
}

export default App;
