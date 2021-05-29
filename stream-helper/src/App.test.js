import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(
    <RecoilRoot>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </RecoilRoot>
    );
  const linkElement = screen.getByText(/The Departed/i);
  expect(linkElement).toBeInTheDocument();
});
