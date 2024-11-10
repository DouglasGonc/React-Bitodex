import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.footer`
    display: flex;
    align-items: center;
    column-gap: 10px;

    img{
        width: 40px;
    }
    strong{
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
        color: var(--text-white);
    }
`;

const Logo: React.FC = () => {
    return (
        <LogoContainer>
            <img src="/images/Logo.png" alt="Logo" />
            <strong>Bitodex</strong>
        </LogoContainer>
    );
};

export default Logo;