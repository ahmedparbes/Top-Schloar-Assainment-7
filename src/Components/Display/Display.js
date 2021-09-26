import React from 'react';
import Scholar from '../Scholar/Scholar';
import './Display.css'

const Display = (props) => {
    console.log(props.schloar)
    const { name, age, salary, img, proffession, Education } = props.schloar;
    return (
        <div className="scholar-box">
            <img className="thumb" src={img} alt="" srcset="" />
            <h3>Name: {name}</h3>
            <h4>Age: {age}</h4>
            <p>Proffesion: {proffession}</p>
            <p><small>Salary : {salary}</small></p>
            <p>Education : {Education}</p>
            <button onClick={() => props.clickHandle(props.schloar)} className=" btn fas fa-shopping-cart" > <span className="text-style">Add to Cart</span></button>
            <br />
            <div className="social-icon">
                <h4 className="fab fa-facebook"></h4>
                <h4 className="fab fa-twitter"></h4>
            </div>

        </div>
    );
};

export default Display;