import React, { Children, isValidElement, ReactNode, useContext, useEffect } from 'react';
import { PathContext } from './store/path';


interface RoutesInterface {
    children: ReactNode | ReactNode[];
}

const Routes = ({ children }: RoutesInterface) => {

    const { path, setPath } = useContext(PathContext);

    useEffect(() => {
        const handlePopState = (e: PopStateEvent) => {
            setPath(e.state.data || "/");
        }
        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, [])


    let element = null;

    Children.forEach(children, child => {

        if (!isValidElement(child)) return;

        if (child.type === React.Fragment) return;

        if (!child.props.path || !child.props.element) return;

        if (child.props.path !== path) return;
        element = child.props.element;
    });

    return <>{element}</>
}

export default Routes;