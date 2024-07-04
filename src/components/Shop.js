import React from 'react';
import styled from 'styled-components';

function Shop() {
  return (
    <div>
      <h1>Shop Page</h1>
      <h2>hello kharidna hai to kharido No bargaining</h2>
    </div>
  );
}

export default Shop;

const Container=styled.div`
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