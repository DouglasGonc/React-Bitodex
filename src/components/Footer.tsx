import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    margin: 0 auto;
    width: 1140px;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <h1>Footer</h1>
        </FooterContainer>
    );
};

export default Footer;