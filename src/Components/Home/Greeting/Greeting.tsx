import React, { Component } from 'react';
import './../../../Styles/Home/Greeting.css';

export class Greeting extends Component {
    render() {
        return (
            <div className="greeting">
                <div className="greeting-container">
                    <div className="greeting-photo">
                        <img className="circle-img" src={require('./../../../Photos/Greeting/me.jpg')} />
                    </div>
                    <div className="greeting-text">
                        <div className="big-heading">Greetings!</div>
                        <div className="heading">My name is Michael Faber. I'm a Software Engineer.</div>
                    </div>
                </div>
            </div>
        );
    }
}