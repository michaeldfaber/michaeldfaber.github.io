import React, { Component } from 'react';
import { Navbar } from '../Components/Layout/Navbar';
import { Skills } from '../Components/Resume/Skills/Skills';
import { Timeline } from '../Components/Resume/Timeline/Timeline';

export class Resume extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Timeline />
                <Skills />
            </div>
        );
    }
}