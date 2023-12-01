import React, { Component } from 'react';

import * as cd from 'color-diff';
import { Color } from '../../Types/Arteest';

import './ArteestContainer.css';

type ArtesstState = {
    userColor: Color;
    power: number;
    buttonText: string;
    score: string;
}

export class ArteestContainer extends Component<unknown, ArtesstState> {
    private toGuess: Color = Color.getRandom();
    private scored: boolean = false;

    constructor(props: unknown) {
        super(props);

        this.state = {
            userColor: new Color(255, 255, 255),
            power: 5,
            buttonText: 'Submit',
            score: '',
        };

        this.white = this.white.bind(this);
        this.black = this.black.bind(this);
        this.red = this.red.bind(this);
        this.green = this.green.bind(this);
        this.blue = this.blue.bind(this);

        this.powerChange = this.powerChange.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.getScore = this.getScore.bind(this);
    }

    public white(): void { 
        if (this.scored) return; 
        this.state.userColor.white(this.state.power); 
        this.forceUpdate(); 
    }

    public black(): void { 
        if (this.scored) return; 
        this.state.userColor.black(this.state.power); 
        this.forceUpdate(); 
    }

    public red(): void { 
        if (this.scored) return; 
        this.state.userColor.red(this.state.power); 
        this.forceUpdate(); 
    }

    public green(): void { 
        if (this.scored) return; 
        this.state.userColor.green(this.state.power); 
        this.forceUpdate(); 
    }

    public blue(): void { 
        if (this.scored) return; 
        this.state.userColor.blue(this.state.power); 
        this.forceUpdate(); 
    }

    public powerChange(event: any): void {
        this.setState({ power: event.target.value });
    }

    public buttonClick(): void {
        if (!this.scored) this.getScore();
        else this.playAgain();
    }

    private getScore(): void {
        this.scored = true;

        const user = { R: this.state.userColor.r, G: this.state.userColor.g, B: this.state.userColor.b };
        const toGuess = { R: this.toGuess.r, G: this.toGuess.g, B: this.toGuess.b };

        const userLab = cd.rgb_to_lab(user);
        const toGuessLab = cd.rgb_to_lab(toGuess);

        const deltaE = cd.diff(userLab, toGuessLab);
        const similar = Math.round((100 - deltaE) * 100) / 100;

        this.setState({ buttonText: 'Play Again', score: `${similar}%` });
    }

    public playAgain(): void {
        this.scored = false;
        this.setState({ buttonText: 'Submit', score: '', userColor: new Color(255, 255, 255) });

        this.toGuess = Color.getRandom();
    }

    public render() {
        const { userColor, power } = this.state;
        const componentStyles = {
            background: userColor.color,
        };

        return (
            <div className='arteest'>
                <div className='heading'>Arteest</div>
                <div className='canvas-container'>
                    <div className='to-guess' style={{ 'background': this.toGuess.toString() }}></div>
                    <div className='user-container'>
                        <div className='user-color' style={(componentStyles)}></div>
                        <div className="user-palette">
                            <button className="white" onClick={this.white}></button>
                            <button className="black" onClick={this.black}></button>
                            <button className="red" onClick={this.red}></button>
                            <button className="green" onClick={this.green}></button>
                            <button className="blue" onClick={this.blue}></button>
                        </div>
                        <label className="user-slider-label">Color Power</label>
                        <input type="range" 
                            min="1" 
                            max="10" 
                            value={power}
                            onChange={this.powerChange}
                            className="user-slider">
                        </input>
                    </div>
                </div>
                <button className="submit" onClick={this.buttonClick}>{this.state.buttonText}</button>
                <div className="score">{this.state.score}</div>
            </div>
        );
    }
}