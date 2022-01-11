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
                        <img className="skills-photo" src={require('../../Photos/Skills/js.png')} />
                    </div>
                    <div className="skills-card">
                        <img className="skills-photo" src={require('../../Photos/Skills/ts.png')} />
                    </div>
                    <div className="skills-card">
                        <img className="skills-photo" src={require('../../Photos/Skills/python.png')} />
                    </div>
                    <div className="skills-card">
                        <img className="skills-photo" src={require('../../Photos/Skills/csharp.png')} />
                    </div>

                    <div className="skills-card-line"></div>

                    {/* Second Row */}
                    <div className="skills-card">
                        <img className="skills-photo" src={require('../../Photos/Skills/vuejs.png')} />
                    </div>
                    <div className="skills-card">
                        <img className="skills-photo" src={require('../../Photos/Skills/react.png')} />
                    </div>
                    <div className="skills-card">
                        <img className="skills-photo" src={require('../../Photos/Skills/aws.png')} />
                    </div>
                    <div className="skills-card">
                        <img className="skills-photo" src={require('../../Photos/Skills/dotnetcore.png')} />
                    </div>

                    <div className="skills-card-line"></div>

                    {/* Third Row */}
                    <div className="skills-card">
                        <img className="skills-photo" src={require('../../Photos/Skills/css.png')} />
                    </div>
                    <div className="skills-card">
                        <img className="skills-photo" src={require('../../Photos/Skills/nodejs.png')} />
                    </div>
                    <div className="skills-card">
                        <img className="skills-photo" src={require('../../Photos/Skills/serverless.png')} />
                    </div>
                    <div className="skills-card">
                        <img className="skills-photo" src={require('../../Photos/Skills/mssql.png')} />
                    </div>
                </div>
            </div>
        );
    }
}