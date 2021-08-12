import React from "react";

const Hello = ({ name }) => {
  if (name) {
    return <h1>Hello, {name}!</h1>;
  } else {
    return <span>Hey, stranger</span>;
  }
};

export default Hello;
