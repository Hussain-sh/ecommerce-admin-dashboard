import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    background-color: var(--color-primary);
    color: var(--color-text-light);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Navbar = () => {
  return (
    <Wrapper>
        Page name
    </Wrapper>
  )
}

export default Navbar