import React from "react";
import styled from "styled-components";

export const Link = ({ className, children }) => (
  <a href="/" className={className}>
    {children}
  </a>
);

export const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;
