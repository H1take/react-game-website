import React, { ReactElement, useState, useCallback, ChangeEvent } from "react";

import useFetch from "hooks/useFetch";
import GameListRender from "./GameList.render";
import { Filter } from "./types";


const GamesList = ({}): ReactElement => {

    // set default values and fetch values
    const [filter, setFilter] = useState<Filter>({ platform: "browser", sortBy: "relevance" });

    // give games and error in custom hook (useFetch)
    const { games, error } = useFetch(filter);

    const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
        setFilter(current => ({
            ...current,
            [e.target.name]: e.target.value
        }));
        e.preventDefault();
    }, []);

    // return GameListRender pure component
    return <GameListRender err={error} games={games} onFilterChange={onFilterChange} />
};

export default GamesList;