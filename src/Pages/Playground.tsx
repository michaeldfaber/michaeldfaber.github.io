import React, { Component } from 'react';
import { Navbar } from '../Components/Layout/Navbar';
import { ColorGrid } from '../Components/Playground/Colors/ColorGrid';

export class Playground extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ColorGrid />
            </div>
        );
    }
}