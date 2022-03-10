import React, { Component } from 'react';
import './../../Styles/Common.css';

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-links-container">
                    <div className="navbar-link">
                        <a href="/">Home</a>
                    </div>
                    <div className="navbar-link">
                        <a href="https://www.github.com/michaeldfaber/">Resume</a>
                    </div>
                    <div className="navbar-link">
                        <a href="https://www.github.com/michaeldfaber/">Playground</a>
                    </div>
                    <div className="navbar-link">
                        <a href="https://www.github.com/michaeldfaber/">GitHub</a>
                    </div>
                    <div className="navbar-link">
                        <a href="https://www.linkedin.com/in/michaeldfaber/">LinkedIn</a>
                    </div>
                    <div className="navbar-link">
                        <a href="https://michaeldfaber.medium.com/">Medium</a>
                    </div>
                </div>
            </div>
        );
    }
}