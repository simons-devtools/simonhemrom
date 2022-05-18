import React from "react";
import { Icon } from "../icons";
import styled from "styled-components";

const StyledLogo = styled.span`
  position: fixed;
  top: 15%;
  left: 15%;
  right: 15%;
  bottom: 15%;
  z-index: 100;
  ${({ theme }) => theme.mixins.fadeInAll}
`;

const IconLoader = () => {
  return (
    <StyledLogo>
      <Icon name="Logo" />
    </StyledLogo>
  );
};

export default IconLoader;
