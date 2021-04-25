import React, { Component } from 'react';
import { Button } from '../Components/Button';
import './Greeting.css'

export class Greeting extends Component {
    render() {
        return (
            <div className="greeting-container">
                <div className="greeting-heading">
                    Greetings!
                </div>
                <div className="greeting-subheading">
                    My name is Michael Faber.
                </div>
                <Button />
                <Button />
                <Button />
            </div>
        );
    }
}