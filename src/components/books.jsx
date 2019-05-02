import React, { Component } from "react";
import gql from 'graphql-tag'
import { Query } from "react-apollo";

import BookItem from "./book-item";

const GET_ALL_BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`;

class Books extends Component {
  state = {};
  render() {
    return (
      <Query query={GET_ALL_BOOKS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          return data.books.map(d => <BookItem data={d} />);
        }}
      </Query>
    );
  }
}

export default Books;
