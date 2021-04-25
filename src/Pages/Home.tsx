import React, { Component } from 'react';
import { Greeting } from '../Components/Greeting'

export class Home extends Component {
    render() {
        return (
            <div>
                <Greeting />
            </div>
        );
    }
}