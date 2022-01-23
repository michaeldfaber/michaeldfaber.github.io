import React, { Component } from 'react';
import $ from 'jquery';
import 'textbanner';

export class Textbanner extends Component<unknown, any> {
    el: any = undefined;
    $el: any = undefined;

    componentDidMount() {
        this.$el = $(this.el);
        this.$el.textbanner();
    }

    render() {
        return <div id="textbanner" ref={el => this.el = el}>textbanner</div>;
    }
}