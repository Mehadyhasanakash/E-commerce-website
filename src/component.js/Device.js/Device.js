import React, { useState } from 'react';

const Device = (props) => {
    const[steps, setSteps]=useState(0)
    const incaseStep=() =>{
        const newStep = steps +1;
        setSteps(newStep)
    }
    const incaseSteps=() =>{
        const newStep = steps -1;
        setSteps(newStep)
    }

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>My steps: {steps}</h1>
            <button onClick={incaseStep}>Click me</button>
            <button onClick={incaseSteps}>Click me2</button>
        </div>
    );
};

export default Device;