/* @jsx h */
import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";
import { ChakraProvider, CSSReset } from "@chakra-ui/core";
import theme from "@chakra-ui/theme";

import Home from "../routes/home";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const App: FunctionalComponent = () => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url;
    };

    return (
        <div id="app">
            {/* @ts-ignore */}
            <ChakraProvider theme={theme}>
                {/* @ts-ignore */}
                <CSSReset />
                <Router onChange={handleRoute}>
                    <Route
                        path="/"
                        component={(Home as unknown) as FunctionalComponent}
                        default
                    />
                </Router>
            </ChakraProvider>
        </div>
    );
};

export default App;
