import React, { Component } from 'react';
import $ from 'jquery';
import 'simpleslideshow';

export class SimpleSlideShow extends Component<unknown, any> {
    el: any = undefined;
    $el: any = undefined;

    componentDidMount() {
        this.$el = $(this.el);
        this.$el.simpleSlideShow({
            time: 3,
            transition: 2,
            urls:
            [
                require('../../Photos/Skills/aws.png'),
                require('../../Photos/Skills/csharp.png'),
                require('../../Photos/Skills/css.png'),
                require('../../Photos/Skills/dotnetcore.png'),
                require('../../Photos/Skills/js.png'),
                require('../../Photos/Skills/mssql.png'),
                require('../../Photos/Skills/nodejs.png'),
                require('../../Photos/Skills/python.png'),
                require('../../Photos/Skills/react.png'),
                require('../../Photos/Skills/serverless.png'),
                require('../../Photos/Skills/ts.png'),
                require('../../Photos/Skills/vuejs.png'),
            ]
        });
    }

    render() {
        return <div ref={el => this.el = el} />;
    }
}