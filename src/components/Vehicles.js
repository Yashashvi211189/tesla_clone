import React from 'react';
import styled from 'styled-components';

function Vehicles() {
  return (
    <Container>
      <h1>Vehicles Page</h1>
      <p>Here you can find information about various vehicles.</p>
    </Container>
  );
}

export default Vehicles;

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
`;
