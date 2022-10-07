import React, { Children, isValidElement, ReactNode, useContext, useEffect } from 'react';
import { PathContext } from './store/path';


interface RoutesInterface {
    children: ReactNode | ReactNode[];
}

const Routes = ({ children }: RoutesInterface) => {

    const { path } = useContext(PathContext);

    useEffect(() => {
        history.pushState("", "", path);
    }, [path])

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