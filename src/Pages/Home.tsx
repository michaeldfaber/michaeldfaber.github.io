import React, { Component } from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import { Greeting } from '../Components/Greeting/Greeting';
import { Timeline } from '../Components/Timeline/Timeline';

export class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Greeting />
                <Timeline />
            </div>
        );
    }
}