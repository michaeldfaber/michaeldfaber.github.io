import React, { Component } from 'react';

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
        this.finish = this.finish.bind(this);
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

    public finish(): void {
        if (!this.scored) this.getScore();
        else this.playAgain();
    }

    private getScore(): void {
        this.scored = true;

        let rScore: number = 0;
        if (this.state.userColor.r < this.toGuess.r) rScore = this.state.userColor.r / this.toGuess.r;
        else rScore = this.toGuess.r / this.state.userColor.r;

        let gScore: number = 0;
        if (this.state.userColor.g < this.toGuess.g) gScore = this.state.userColor.g / this.toGuess.g;
        else gScore = this.toGuess.g / this.state.userColor.g;

        let bScore: number = 0;
        if (this.state.userColor.b < this.toGuess.b) bScore = this.state.userColor.b / this.toGuess.b;
        else bScore = this.toGuess.b / this.state.userColor.b;

        let score = Math.round(((rScore + gScore + bScore) / 3) * 100000) / 1000;

        this.setState({ buttonText: 'Play Again', score: `${score}%` });
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
                <button className="submit" onClick={this.finish}>{this.state.buttonText}</button>
                <div className="score">{this.state.score}</div>
            </div>
        );
    }
}