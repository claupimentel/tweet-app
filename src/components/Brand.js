import React from 'react';
import styled from 'styled-components';

const StyledBrand = styled.h1`
  color: #0099ff;
  text-transform: lowercase;
  font-size: 1.3rem;
`;

const Brand = () => <StyledBrand>minha-aplicação</StyledBrand>;

export default Brand;
