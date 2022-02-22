import React, { Component } from 'react';
import './../../../Styles/Home/Greeting.css';

export class Greeting extends Component {
    render() {
        return (
            <div className="greeting">
                <img className="circle-img" src={require('./../../../Photos/Greeting/me.jpg')} />
                <div className="big-heading">Greetings</div>
                <div className="heading">My name is Michael Faber. I'm a Software Engineer.</div>
            </div>
        );
    }
}