import React, { ReactNode } from "react";
import PathProvider from './store/path';

interface RouterInterface {
    children: ReactNode | ReactNode[];
}

const Router = ({ children }: RouterInterface) => {

    return (
        <PathProvider>
            {children}
        </PathProvider>
    )
}

export default Router;