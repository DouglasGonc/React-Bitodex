import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.main`
    height: 860px;
    background: url('/images/Banner teste.png') no-repeat center center;
    background-size: cover;  
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    section{
        margin: 0 auto;
        width: 1140px;
    }

    h1{
        color: var(--text-white);
    }

    p{
        color: var(--text-white);
    }
`;

const Banner: React.FC = () => {
    return (
        <BannerContainer>
            <section>
                <h1>Bitodex is peer to peer<br/>
                innovative network</h1>
                <p>Leverage agile frameworks to provide synopsis level Iterative approaches<br/>
                to corporate strategy foster collaborative the value proposition. </p>
            </section>
        </BannerContainer>
    );
};

export default Banner;