import React, { ReactElement } from "react";

import { Game } from "types";

import windowsIcon from "assets/icons/windows.svg";
import browserIcon from "assets/icons/browser.svg";
import { BROWSER, WINDOWS } from "./constants";
import { StyledLink, Img, Title, Details, Description, Genre, Icon } from "./styles";

interface Props {
    content: Game
}

const GameCard = ({ content }: Props): ReactElement => {

    const { id, title, thumbnail, short_description, genre, platform } = content;


    //check platform and icon
    const icons = platform.split(",").map(p => {
        let icon = null

        switch(p.trim()) {
            case BROWSER:
                icon = <Icon key={`${id}-browser`} alt="browser icon" src={browserIcon} />
                break
            case WINDOWS:
                icon = <Icon key={`${id}-window`} alt="window icon" src={windowsIcon} />
                break
            default: 
                break
        }
        return icon
    })


    // link for game
    const link = `/game/${id}`;

    // custom styles

    return (
        <StyledLink to={link}>
            <Img src={thumbnail} alt={`${title} logo`} />
            <Details>
                <Title>{title}</Title>
                <Description>{short_description}</Description>
                <Genre>{genre}</Genre>
                {icons}
            </Details>
        </StyledLink>
    );
};

export default GameCard