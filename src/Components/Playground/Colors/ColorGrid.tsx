import React, { Component } from 'react';
import { ColorSquare } from './ColorSquare';
import './ColorGrid.css';

export class ColorGrid extends Component {
    render() {
        let colorSquares: any[] = [];
        for (let i = 0; i < 510; i++) {
            let colorSquare = <ColorSquare />
            colorSquares.push(colorSquare);
        }

        return (
            <div className="color-grid">
                <div className="color-grid-heading">
                    Colors
                </div>
                <div className="color-grid-container">
                    {colorSquares}
                </div>
            </div>
        );
    }
}