import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    background-color: #fff;
    width: 1140px;
    margin: -50px auto 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    border-radius: 17px;
    padding: 50px 100px;
    box-sizing: border-box;
    
    h2{
        background: var(--primary-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const Companhias: React.FC = () => {
    return (
        <Container>
            <h2>Trusted Over 2300 + Companies in the World</h2>
            <div>
                <img src="/images/image-Redken.png" alt="Redken" />
                <img src="/images/image-Clarins.png" alt="Clarins" />
                <img src="/images/image-Schuwarzkopf.png" alt="Schuwarzkopf" />
                <img src="/images/image-Boss.png" alt="BOSS" />
                <img src="/images/image-DeG.png" alt="D&G" />
            </div>
        </Container>
    );
};

export default Companhias;