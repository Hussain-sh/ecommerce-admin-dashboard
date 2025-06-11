import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
`;

const CompanyName = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: var(--color-accent);
`;

const NavLinksWrapper = styled.ul`
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`;

const NavLinks = styled.li`
    padding: 10px 10px 10px 0px;
    color: var(--color-accent);
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
`

const Sidebar = () => {
    const navLinks = ["Dashboard", "Orders", "Products"];
  return (
    <Wrapper>
        <CompanyName>My company</CompanyName>
        <NavLinksWrapper>
            {
                navLinks.map((link, index)=> (
                    <NavLinks key={index}>{link}</NavLinks>
                ))
            }
        </NavLinksWrapper>
    </Wrapper>
  )
}

export default Sidebar