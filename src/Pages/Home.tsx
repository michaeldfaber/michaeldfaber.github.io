import React, { Component } from 'react';
import "../Styles/Common.css";
import { Navbar } from '../Components/Layout/Navbar';
import { Greeting } from '../Components/Home/Greeting/Greeting';
import { HeroLinkLeft } from '../Components/Home/HeroLink/HeroLinkLeft';

export class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Greeting />
                <HeroLinkLeft 
                    imagePath={require('../Photos/Timeline/minecraft.jpg')}
                />
                <div className="footer" />
            </div>
        );
    }
}