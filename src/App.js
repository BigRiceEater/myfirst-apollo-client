import React from "react";
import "./App.css";

import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
      Apollo client with React!
      </div>
    </ApolloProvider>
  );
}

export default App;
