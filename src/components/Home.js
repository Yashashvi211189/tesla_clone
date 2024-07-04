import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title="MODEL A"
        description="With Top Speed of 300km/hr"
        backgroundimg="model-s.jpg"
        lftBtnText="CUSTOM ORDER"
        rightBtnText="Existing Order"
      />
      <Section
        title="MODEL L"
        description="With Top Speed of 255km/hr"
        backgroundimg="model-y.jpg"
        lftBtnText="CUSTOM ORDER"
        rightBtnText="Existing Order"
      />
      <Section
        title="MODEL U"
        description="With Top Speed of 230km/hr"
        backgroundimg="audio.jpg"
        lftBtnText="CUSTOM ORDER"
        rightBtnText="Existing Order"
      />
      <Section
        title="MODEL Q"
        description="With Top Speed of 200km/hr"
        backgroundimg="model-3.jpg"
        lftBtnText="CUSTOM ORDER"
        rightBtnText="Existing Order"
      />
      <Section
        title="Solar panels"
        description="Best solar panels to ever exist"
        backgroundimg="solar-panel.jpg"
        lftBtnText="ORDER NOW"
        rightBtnText="ADD TO CART"
      />
      <Section
        title="ACCESSORIES"
        backgroundimg="accessories.jpg"
        rightBtnText="ADD TO CART"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
