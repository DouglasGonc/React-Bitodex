import React from "react"
import styled from "styled-components";
import UserIcon from "../assets/User-Icon";


const ButtonLogo = styled.a`
    padding: 10px 20px;
    border-radius: 30px;
    background: var(--secondary-gradient);
    color: #ffffff;
    text-decoration: none;

    font-family: 'Roboto', sans-serif;
    font-size: 14PX;

    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        width: 18px;
        margin-right: 3px;
    }
`;

const LoginButton: React.FC = () => {
    return (
        <ButtonLogo href="#">
            <UserIcon />
            LOGIN
        </ButtonLogo>
    );
        
}

export default LoginButton;