import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import LoginButton from '../layouts/Login-Button';
import SocialMedia from '../layouts/Social-Media';
import SearchIcon from '../assets/search-icon';

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
    position: relative;
    
    section{
        position: fixed;

        background: ${({ isScrolled }) => isScrolled ? 'var(--primary-gradient)' : 'transparent'};
        transition: all 2s ease-in-out;

        width: 100%;
        height: 90px;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    `;

const HeaderFlex = styled.div`
    width: 1140px;
    margin: 0 auto;
    height: 40px;

    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    div:first-child{
        display: flex;
        align-items: center;
        justify-content: start;
    }
    div:last-child{
        display: flex;
        align-items: center;
        justify-content: end;
        column-gap: 30px;
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 40px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 14px;
    color: var(--text-white);
    font-family: 'Roboto', sans-serif;

    &:hover {
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 7px;
    }
`;

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <HeaderContainer isScrolled={isScrolled}>
            <section>
                <HeaderFlex>
                    <div>
                        <Logo />
                    </div>
                    <Nav>
                        <StyledLink to="/">ABOUT</StyledLink>
                        <StyledLink to="/">FEATURES</StyledLink>
                        <StyledLink to="/">SOLUTIONS</StyledLink>
                        <StyledLink to="/">PRICING</StyledLink>
                        <StyledLink to="/">CONTACT US</StyledLink>
                    </Nav>
                    <div>
                        <SocialMedia size={13} />
                        <SearchIcon size={20} color="#4a4a4a" />
                        <LoginButton />
                    </div>
                </HeaderFlex>
            </section>
        </HeaderContainer>
    );
};

export default Header;