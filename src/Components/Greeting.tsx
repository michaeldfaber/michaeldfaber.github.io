import React, { Component } from 'react';
import { Button } from '../Components/Button';
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
                    <p>Software Engineer with over 5 years of experience.</p>
                    <p>I love developing web applications, speeding up the process of developing web applications, and making web applications more secure.</p>
                    <p>I created this simple website to showcase my career, blog, and personal projects.</p>
                </div>
            </div>
        );
    }
}