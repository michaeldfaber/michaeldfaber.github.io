import React, { Component } from 'react';
import './ColorSquare.css';

type ColorSquareState = {
    color: number
}

export class ColorSquare extends Component<unknown, ColorSquareState> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            color: 0
        }
    }

    handleColorChange() {
        let color = this.state.color;
        if (color === 6) {
            color = 0;
        } else {
            color++;
        }
        this.setState({ color: color }, this.forceUpdate);
    }

    render() {
        const className = "color-square color-" + this.state.color.toString();
        return (
            <div className={className} onMouseLeave={() => this.handleColorChange()}></div>
        );
    }
}