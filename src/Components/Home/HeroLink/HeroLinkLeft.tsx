import React, { Component } from 'react';
import { HeroLinkProps } from '../../../Types/HeroLinkProps';
import "../../../Styles/Home/HeroLink/HeroLinkLeft.css";

export class HeroLinkLeft extends Component<HeroLinkProps, any> {
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