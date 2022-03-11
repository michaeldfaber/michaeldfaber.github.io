import React, { Component } from 'react';
import "../Styles/Common.css";
import { Navbar } from '../Components/Layout/Navbar';
import { Greeting } from '../Components/Home/Greeting/Greeting';
import { HeroText } from '../Components/Home/HeroText/HeroText';

export class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Greeting />
                <HeroText 
                    imagePath={require('../Photos/Timeline/minecraft.jpg')}
                />
                <div className="footer" />
            </div>
        );
    }
}