import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import Total from '../Total/Total';
import './Scholar.css'

const Scholar = () => {
    const [scholars, setScholars] = useState([]);
    const [count, setCount] = useState([]);
    useEffect(() => {
        fetch('./Data.JSON')
            .then(res => res.json())
            .then(data => setScholars(data))
    }, [])

    const clickHandle = (scholar) => {
        const newCount = [...count, scholar];
        setCount(newCount);
    }
    return (
        <div className="container">
            <div className="details">
                {
                    scholars.map(scholar => <Display schloar={scholar}
                        clickHandle={clickHandle}>

                    </Display>)
                }
            </div>
            <div className="scholar-cost">

                <Total count={count}></Total>
            </div>

        </div>
    );
};

export default Scholar;