import React, { Component } from 'react';
import { HeroTextProps } from '../../../Types/HeroTextProps';
import "../../../Styles/Home/HeroText/HeroText.css";

export class HeroText extends Component<HeroTextProps, any> {
    render() {
        return (
            <div className="hero-link-left">
                <div className="hero-link-left-container">
                    <div className='heading-white'>About Me</div>
                    <div className='body-white'>
                        I've been working in software for a little over 5 years now. If you want to see what those five years have been like for me, check out my <a href='/#/resume'>resume</a>.
                    </div>
                </div>
            </div>
        );
    }
}