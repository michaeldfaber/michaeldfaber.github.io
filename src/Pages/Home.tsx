import React, { Component } from 'react';
import { Navbar } from '../Components/Navbar';
import { Greeting } from '../Components/Greeting';
import { Timeline } from '../Components/Timeline';

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