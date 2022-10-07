import React from 'react';
import useRouter from '../hooks/useRouter';

const Root = () => {
    const { push } = useRouter();

    const onClick = () => {
        push("/about");
    }

    return <div>
        <h1>root</h1>
        <button onClick={onClick}>about</button>
    </div>

}

export default Root;