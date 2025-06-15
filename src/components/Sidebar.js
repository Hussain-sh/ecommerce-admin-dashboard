import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react'
import styled from 'styled-components'
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
    background-color: white;
    width: ${props => props.openSidebar ? '200px' : '50px'};
    transition: width 0.3s ease-in-out;
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

const ListItems = styled.li`
    list-style: none;
    padding: 10px 10px 10px 0px;
`;

const NavLinks = styled.a` 
    color: var(--color-accent);
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;

    cursor: pointer;
     opacity: ${({ openSidebar }) => (openSidebar ? 1 : 0)};
  transform: ${({ openSidebar }) => (openSidebar ? 'translateX(0)' : 'translateX(-10px)')};
  visibility: ${({ openSidebar }) => (openSidebar ? 'visible' : 'hidden')};

  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
`;

const ItemWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

const OpenIcon = styled(MdKeyboardDoubleArrowLeft)`
  color: var(--color-accent);
  font-size: 20px;
  cursor: pointer;
`;

const CloseIcon = styled(MdKeyboardDoubleArrowRight)`
  color: var(--color-accent);
  font-size: 20px;
  cursor: pointer;
`;

const ToggleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Sidebar = () => {
    const navLinks = [
        {
            name: 'Dashboard',
            path: '/'
        },
        {
            name: 'Orders',
            path: '/orders'
        },
        {
            name: 'Products',
            path: '/products'
        }
    ];

    const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <Wrapper openSidebar={openSidebar}>
        <ToggleWrapper>
            {
                openSidebar && <CompanyName>My company</CompanyName>
            }
            {
                    openSidebar ? <OpenIcon onClick={() => setOpenSidebar(!openSidebar)} /> : <CloseIcon onClick={() => setOpenSidebar(!openSidebar)} />
            }
                  
        </ToggleWrapper>
       
        <NavLinksWrapper>
            {
                navLinks.map((link, index)=> {
                    return (
                    <ListItems key={index}>
                         <Link href={link.path} passHref legacyBehavior>
                            <ItemWrapper>
                                <Image src={`/svgs/${link.name.toLowerCase()}.svg`} alt={link.name} width={20} height={20} />
                                {
                                    openSidebar &&
                                    <NavLinks openSidebar={openSidebar}>{link.name}</NavLinks>
                                }
                            
                            </ItemWrapper>
                        </Link>
                    </ListItems>
                    );            
                })
            }
        </NavLinksWrapper>
    </Wrapper>
  )
}

export default Sidebar