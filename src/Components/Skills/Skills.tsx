import React, { Component } from 'react';
import './Skills.css'

export class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <div className="skills-heading">
                    My Skills
                </div>
                <div className="skills-body">
                    Tools that I love and have used professionally.
                </div>
                <div className="skills-cards-container">
                    {/* First Row */}
                    <div className="skills-card">
                        <img className="skills-photo" src={require('../../Photos/Skills/csharp.png')} />
                    </div>
                    <div className="skills-card">
                        <img className="skills-photo" src={require('../../Photos/Skills/js.png')} />
                    </div>
                    <div className="skills-card">
                        <img className="skills-photo" src={require('../../Photos/Skills/ts.png')} />
                    </div>
                    <div className="skills-card">
                        <img className="skills-photo" src={require('../../Photos/Skills/python.png')} />
                    </div>

                    {/* TODO more rows */}
                </div>

                <div className="skills-mobile-list">
                    <p>C#</p>
                    <p>JavaScript</p>
                    <p>TypeScript</p>
                    <p>Python</p>
                </div>
            </div>
        );
    }
}