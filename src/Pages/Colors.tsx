import React, { Component } from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import { ColorGrid } from '../Components/Colors/ColorGrid';

export class Colors extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ColorGrid />
            </div>
        );
    }
}