import React, { ReactNode, useContext, useEffect } from "react";
import PathProvider, { PathContext } from './store/path';

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