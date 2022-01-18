import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:3001/',
  cache: new InMemoryCache()
});

export const GET_NEXT_MATCH = gql`
  query nextMatch {
    nextMatch {
      id
      date
      home {
        id
        name
        stadium
        firstEleven {
          id
          firstname
          lastname
          height
          dateOfBirth
          position
          squadNumber
          nationality
        }
      }
      away {
        id
        name
        stadium
        firstEleven {
          id
          firstname
          lastname
          height
          dateOfBirth
          position
          squadNumber
          nationality
        }
      }
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
