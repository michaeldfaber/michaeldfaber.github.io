import React, { Component } from 'react';
import './Button.css'

export class Button extends Component {
    render() {
        return (
            <div className="button-container">
                <button className="button"></button>
            </div>
        );
    }
}