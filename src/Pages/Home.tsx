import React, { Component } from 'react';
import "../Styles/Common.css";
import { Navbar } from '../Components/Layout/Navbar';
import { Greeting } from '../Components/Home/Greeting/Greeting';

export class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Greeting />
                <div className="footer" />
            </div>
        );
    }
}