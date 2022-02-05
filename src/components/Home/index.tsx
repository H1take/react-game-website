import React, { ReactElement } from "react";

import GameList from "components/GameList";
import withErrorBoundary from "hoc/withErrorBoundary";

// module component render all

const Home = (): ReactElement => (
    <main>
        <GameList />
    </main>
)

export default Home;

// export default withErrorBoundary(Home);