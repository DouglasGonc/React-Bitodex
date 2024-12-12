import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: var(--color-title-blue);
`;

const FooterTop = styled.div`    
    width: 1170px;
    margin: 0 auto;
    padding: 30px 15px;
`;

const FooterBot = styled.div`
    border-top: 1px;
    border-right: 0;
    border-left: 0;
    border-bottom: 0;
    border-style: solid;
    border-color: white;

    p {
        padding: 20px 0;
        text-align: center;
        color: var(--text-white);
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
    }
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterTop>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </FooterTop>

            <FooterBot>
                <p>Copyright  2022 Bitodex All rights reserved</p>
            </FooterBot>
        </FooterContainer>
    );
};

export default Footer;