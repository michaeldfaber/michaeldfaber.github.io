import React, { Component } from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import { SimpleSlideShow } from '../Components/JQueryPlugins/SimpleSlideShow/SimpleSlideShow';

export class JQueryPlugins extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <SimpleSlideShow />
            </div>
        );
    }
}