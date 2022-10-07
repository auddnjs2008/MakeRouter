import React from 'react';
import useRouter from '../hooks/useRouter';
import { PathContext } from '../store/path';

const About = () => {
    const { push } = useRouter();


    const onClick = () => {
        push("/");
    }

    return <div>
        <h1>about</h1>
        <button onClick={onClick}>go main</button>
    </div>

}

export default About;