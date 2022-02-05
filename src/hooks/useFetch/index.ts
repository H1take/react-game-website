import React, { useState, useEffect } from "react";

import axios from "axios";

import { Game } from "types";
import { Filter } from "components/GameList/types";
import { API_HOST, API_KEY } from "./constants";

type Response = {
    games: Game[],
    error?: string
}

const useFetch = (params: Filter): Response => {

    // set games in a type of Game
    const [games, setGames] = useState<Game []>([]);
    // set error 
    const [err, setErr] = useState<string>("");
    // set params for axios.get 
    const { platform, genre, tag, sortBy } = params;


    // fetch all games of server
    useEffect(() => {
        axios.get("/games", {
            baseURL: `https://${API_HOST}/api`,
            headers: {
                "x-rapidapi-key": API_KEY,
                "x-rapidapi-host": API_HOST
            },
            params: {
                platform, category: genre, tag, "sort-by": sortBy
            }
        }).then(res => setGames(res.data))
          .catch(err => setErr(err.message))
    }, [platform, genre, tag, sortBy]);

    return {
        games,
        error: err
    }
};

export default useFetch;