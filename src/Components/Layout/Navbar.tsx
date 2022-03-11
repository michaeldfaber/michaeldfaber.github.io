import React, { Component } from 'react';
import './../../Styles/Common.css';

type NavBarState = {
    menuOpen?: boolean
}

export class Navbar extends Component<unknown, NavBarState> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            menuOpen: true
        }
        this.handleMobileResize = this.handleMobileResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", () => this.handleMobileResize());
    }

    handleMobileResize() {
        if(window.innerWidth >= 1201)
        {
            this.setState({ menuOpen: true }, this.forceUpdate);
        }

        if(window.innerWidth <= 1200)
        {
            this.setState({ menuOpen: false }, this.forceUpdate);
        }
    }

    handleMobileToggle() {
        const toggle = this.state.menuOpen;
        this.setState({ menuOpen: !toggle }, this.forceUpdate);
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-hamburger" onClick={() => this.handleMobileToggle()}>≡</div>
                {this.state.menuOpen && (
                    <div className="navbar-links-container">
                        <div className="navbar-link">
                            <a href="/">Home</a>
                        </div>
                        <div className="navbar-link">
                            <a href="https://www.github.com/michaeldfaber/">Resume</a>
                        </div>
                        <div className="navbar-link">
                            <a href="https://www.github.com/michaeldfaber/">Playground</a>
                        </div>
                        <div className="navbar-link">
                            <a href="https://www.github.com/michaeldfaber/">GitHub</a>
                        </div>
                        <div className="navbar-link">
                            <a href="https://www.linkedin.com/in/michaeldfaber/">LinkedIn</a>
                        </div>
                        <div className="navbar-link">
                            <a href="https://michaeldfaber.medium.com/">Medium</a>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}