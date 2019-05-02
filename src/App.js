import React from "react";
import "./App.css";

import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-boost";
import Books from './components/books'

const client = new ApolloClient({
  uri: "http://localhost:4000"
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
      <Books />
      </div>
    </ApolloProvider>
  );
}

export default App;
