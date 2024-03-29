import React, { Component } from 'react';
import './Greeting.css';

export class Greeting extends Component {
    render() {
        return (
            <div className="greeting">
                <img className="greeting-photo" src={require('../../Photos/Greeting/me.jpg')} />
                <div className="greeting-heading">
                    Greetings!
                </div>
                <div className="greeting-subheading">
                    My name is Michael Faber.
                </div>
                <div className="greeting-body">
                    <p>Software and DevOps Engineer with over 5 years of experience.</p>
                    <p>I love building things, speeding up the process of building things, and making sure tools are secure.
                        If you'd like to see how I've done that over the course of my career, you can checkout my <a href={require('../../Resume.pdf')} target="_blank">resume</a>.
                    </p>
                    <p>
                        If you'd like to see what makes this website tick, along with my other personal projects, you can checkout my <a href="https://github.com/michaeldfaber"> GitHub</a>.
                    </p>
                </div>
            </div>
        );
    }
}