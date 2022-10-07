import React, { createContext, ReactNode, useState } from "react";

interface Path {
    path: string;
    setPath: React.Dispatch<React.SetStateAction<string>>
}


export const PathContext = createContext<Path>({
    path: location.pathname,
    setPath: () => undefined
})


interface PathProviderInterface {
    children: ReactNode;
}

const PathProvider = ({ children }: PathProviderInterface) => {
    const [path, setPath] = useState(location.pathname);

    return <PathContext.Provider value={{ path, setPath }}>{children}</PathContext.Provider>
}

export default PathProvider