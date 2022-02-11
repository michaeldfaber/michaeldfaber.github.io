import React, { Component } from 'react';
import { Navbar } from '../../Components/Layout/Navbar';
import { JQueryPlugins } from '../../Components/Articles/JQueryPlugins/JQueryPlugins';

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