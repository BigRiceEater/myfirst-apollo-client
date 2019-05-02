import React, { Component } from "react";

class BookItem extends Component {
  render() {
    const { title, author } = this.props.data;
    return (
      <div style={{padding: '20px', border: '2px solid lightgrey', marginBottom : '10px', borderRadius: '20px'}}>
        <p>{title}</p>
        <p>{author}</p>
      </div>
    );
  }
}

export default BookItem;
