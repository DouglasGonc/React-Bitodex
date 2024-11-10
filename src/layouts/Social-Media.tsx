import React from "react";
import styled from "styled-components";
import { FacebookIcon } from "../assets/facebook-icon";
import { XIcon } from "../assets/twitter-X-icon";
import { LinkedInIcon } from "../assets/linkedin-icon";
import { InstagramIcon } from "../assets/instagram-icon";

const Media = styled.div<{ size: number }>`
    display: flex;
    column-gap: 18px;

    svg {
        width: ${(props) => props.size}px;
        color: white !important;
    }

    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: inherit;
    }
`;

interface MediaProps {
    size?: number;
}

const SocialMedia: React.FC<MediaProps> = ({ size = 24 }) => {
    return (
        <Media size={size}>
            <a href="https://www.facebook.com/sua-pagina" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
            </a>
            <a href="https://www.twitter.com/sua-conta" target="_blank" rel="noopener noreferrer">
                <XIcon />
            </a>
            <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
            </a>
        </Media>
    );
};

export default SocialMedia;