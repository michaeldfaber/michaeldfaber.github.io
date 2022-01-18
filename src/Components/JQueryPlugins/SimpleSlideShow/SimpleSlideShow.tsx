import React, { Component } from 'react';
import './SimpleSlideShow.css';
import $ from 'jquery';
import 'simpleslideshow';

export class SimpleSlideShow extends Component<unknown, any> {
    el: any = undefined;
    $el: any = undefined;

    componentDidMount() {
        this.$el = $(this.el);
        this.$el.simpleSlideShow({
            urls:
            [
                require('../../../Photos/Skills/aws.png'),
                require('../../../Photos/Skills/csharp.png'),
                require('../../../Photos/Skills/nodejs.png')
            ]
        });
    }

    render() {
        return <div ref={el => this.el = el} />;
    }
}