import React from 'react';
import './Total.css'

const Total = (props) => {
    const counts = props.count;
    let name = '';
    let total = 0;
    for (const scholar of counts) {
        total = total + scholar.salary;
        name = name + scholar.name;


    }
    return (
        <div>
            <h2>Scholar Added : {props.count.length} </h2>
            <h4>Total Salary : {total} </h4>

            <p className="name">{name}</p>

        </div>
    );
};

export default Total;