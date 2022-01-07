import React, { Component } from 'react';
import './Greeting.css'

export class Greeting extends Component {
    render() {
        return (
            <div className="greeting">
                <img className="greeting-photo" src={require('../Photos/me.jpg')} />
                <div className="greeting-heading">
                    Greetings!
                </div>
                <div className="greeting-subheading">
                    My name is Michael Faber.
                </div>
                <div className="greeting-body">
                    <p>Software and DevOps Engineer with over 5 years of experience.</p>
                    <p>I love developing web applications, speeding up the process of developing web applications, 
                        and making web applications more secure. I created this website to showcase my life and career. 
                        If you'd like to see what makes this website tick, along with my other personal projects, you can checkout my
                        <a href="https://github.com/michaeldfaber"> GitHub</a>. </p>
                </div>
            </div>
        );
    }
}