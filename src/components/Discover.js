import React from 'react';
import styled from 'styled-components';

function Discover() {
  return (
    <Container>
      <h1>Discover Page</h1>
      <p>Explore new and exciting features and updates.</p>
    </Container>
  );
}

export default Discover;

const Container = styled.div`

min-height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 1;
background: white;
`
;