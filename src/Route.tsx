import React, { ReactNode, } from "react";


interface RouteInterface {
    path: string;
    element: ReactNode;
}


const Route = ({ path, element }: RouteInterface) => {

    return <>{element}</>
}

export default Route;