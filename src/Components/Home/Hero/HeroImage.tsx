import React, { Component } from 'react';
import { HeroImageProps } from '../../../Types/HeroImageProps';
import "../../../Styles/Home/Hero/HeroImage.css";

export class HeroImage extends Component<HeroImageProps, any> {
    render() {
        return (
            <div className="hero-image">
                <img className="hero-image-img" src={this.props.imagePath} />
            </div>
        );
    }
}