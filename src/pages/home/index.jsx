import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => (
  <Wrapper>
    <h1>Home Page</h1>
    <Link to="/signin">Signin</Link>
  </Wrapper>
);

const Wrapper = styled.div`
  background: green;
`;

export default Home;
