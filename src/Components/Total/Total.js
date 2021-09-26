import React from 'react';
import './Total.css'

const Total = (props) => {
    const counts = props.count;
    let name = '';
    let total = 0;
    let image = ''
    for (const scholar of counts) {
        total = total + scholar.salary;
        name = name + scholar.name;
        image = image + scholar.img;

    }
    return (
        <div>
            <h2>Scholar Added : {props.count.length} </h2>
            <h4>Total Salary : {total} </h4>
            <div id="set-name-img">
                <img src={image} alt="" />
                <p className="name">{name}</p>
                <br />
            </div>


        </div>
    );
};

export default Total;