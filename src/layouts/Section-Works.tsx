import React from 'react';
import styled from 'styled-components';
import { BitcoinMiningIcon } from '../assets/Bitcoin-Mining-icon';
import { BitcoinTradingIcon } from '../assets/Bitcoin-Trading-icon';
import { CoinMachineIcon } from '../assets/Coin-Machine-icon';
import { ArrowRightCircleIcon } from '../assets/arrow-right-circle-icon';

const Container = styled.section`
    max-width: 1140px;
    margin: 150px auto 150px auto;
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 17px;
        padding: 50px;
    }
    .center{
        background: var(--primary-gradient);
        h3, p, a, svg{
            color: var(--text-white);
        }
    }
`;

const Title = styled.h3`
    font-weight: bold;
    margin-top: 20px;
`;

const Description = styled.p`
    margin-top: 10px;
`;

const LearnMoreButton = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 13px;
    cursor: pointer;
    margin-top: 30px;

    svg{
        width: 21px;
        height: 21px;
    }
`;

const Comofunciona: React.FC = () => {
    return (
        <Container>
            <h1>How it Works</h1>
            <p>Leverage agile frameworks to provide synopsis for high level Iterative approaches<br/>
            to corporate strategy foster collaborative further the value proposition.</p>
            <ContainerGrid>
                <div>
                    <BitcoinMiningIcon/>
                    <Title>Bitcoin Mining</Title>
                    <Description>
                    There are many variations offset wille passages of Lorem Ipsum available, alteration to an end.
                    </Description>
                    <LearnMoreButton>LEARN MORE <ArrowRightCircleIcon/></LearnMoreButton>
                </div>
                <div className='center'>
                    <BitcoinTradingIcon/>
                    <Title>Bitcoin Trading</Title>
                    <Description>
                    There are many variations offset wille passages of Lorem Ipsum available, alteration to an end.
                    </Description>
                    <LearnMoreButton>LEARN MORE <ArrowRightCircleIcon/></LearnMoreButton>
                </div>
                <div>
                    <CoinMachineIcon/>
                    <Title>Coin Machine</Title>
                    <Description>
                    There are many variations offset wille passages of Lorem Ipsum available, alteration to an end.
                    </Description>
                    <LearnMoreButton>LEARN MORE <ArrowRightCircleIcon/></LearnMoreButton>
                </div>
            </ContainerGrid>
        </Container>
    );
};

export default Comofunciona;