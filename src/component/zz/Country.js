import React from 'react';

const Country = (props) => {
    const {name, population, alpha3Code, flag} = props.val;
    return (
        <div style={{backgroundColor: 'red', 
        color: '#fff', padding: '20px'}}>
            <span>{alpha3Code} - {name}</span>
            <span>And its population: {population}</span>
            <small><img style={{width: '50px'}} src={flag} alt=""/></small>
            <button onClick={() => props.handle(props.val.name)}>Add</button>
        </div>
    );
};

export default Country;