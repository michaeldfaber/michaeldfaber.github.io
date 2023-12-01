import React, { Component } from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import { ArteestContainer } from '../Components/Arteest/ArteestContainer';

export class Arteest extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ArteestContainer />
            </div>
        );
    }
}