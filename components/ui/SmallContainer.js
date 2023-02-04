import React from "react";
import Container from "./Container";

const SmallContainer = ({ children }) => {
  return (
    <Container>
      <div className="max-w-6xl mx-auto">{children}</div>
    </Container>
  );
};

export default SmallContainer;
