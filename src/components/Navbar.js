import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    background-color: var(--color-primary);
    color: var(--color-text-light);
    display: flex;
    justify-content: flex-start;
    padding: 0 1rem;
    align-items: center;
    font-weight: 700;
`;
const Navbar = () => {
   const router = useRouter();
  const pathname = router.pathname;
  const pageName = pathname === '/'
  ? 'Dashboard'
  : pathname
      .slice(1)
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());

  return (
    <Wrapper>
        {pageName}
    </Wrapper>
  )
}

export default Navbar