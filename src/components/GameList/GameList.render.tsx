import React, { ReactElement, ChangeEvent } from "react";

import { Game } from "types";
import GameCard from "components/GameCard";
import GameFilter from "components/GameFilter";

import { List, ListItem } from "./styles";

interface Props {
    err?: string,
    games: Game[],
    onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameList = ({ err, games, onFilterChange }: Props): ReactElement => {
    if(err) {
        <p>Unable to fetch games</p>
    }
    if(!games?.length) {
        <p>No games available</p>
    }

    return(
        <>
            <GameFilter onChange={onFilterChange}/>
            <List>
                {games.map(game => (
                    <ListItem key={game.id}>
                        <GameCard content={game}/>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GameList