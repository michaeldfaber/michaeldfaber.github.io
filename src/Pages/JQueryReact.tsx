import React, { Component } from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import { JQueryPlugins } from '../Components/JQueryPlugins/JQueryPlugins';

export class JQueryReact extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <JQueryPlugins />
            </div>
        );
    }
}