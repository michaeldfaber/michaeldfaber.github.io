import React, { Component } from 'react';
import './JQueryPlugins.css'
import { SimpleSlideShow } from './SimpleSlideShow';

export class JQueryPlugins extends Component {
    render() {
        return (
            <div className="jquery-plugins">
                <div className="jquery-plugins-heading">jQuery Plugins</div>
                <div className="jquery-plugins-subheading">simpleSlideShow</div>
                <div className="simple-slide-show">
                    <SimpleSlideShow />
                </div>
                <div className="jquery-plugins-body">
                    <p>The first jQuery plugin I ever created. A simple slide show, hence the name.</p>
                    <p>Customizable, and easy to add to your project. I don't honestly recommend mixing jQuery and React, but here's what the component I used to get it working here looks like:</p>
                </div>
                <div className="jquery-plugins-react-example-code">
                    <code>
                        import React, &#123; Component &#125; from 'react';<br />
                        import $ from 'jquery';<br />
                        import 'simpleslideshow';<br />
                        <br />
                        export class SimpleSlideShow extends Component&#60;unknown, any&#62; &#123;<br />
                        &emsp;&emsp;el: any = undefined;<br />
                        &emsp;&emsp;$el: any = undefined;<br />
                        <br />
                        &emsp;&emsp;componentDidMount() &#123;<br />
                        &emsp;&emsp;&emsp;&emsp;this.$el = $(this.el);<br />
                        &emsp;&emsp;&emsp;&emsp;this.$el.simpleSlideShow(&#123;<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;time: 3,<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;transition: 2,<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;urls:<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;require('../../Photos/Skills/aws.png'),<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;require('../../Photos/Skills/csharp.png'),<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;require('../../Photos/Skills/css.png'),<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;require('../../Photos/Skills/dotnetcore.png'),<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;require('../../Photos/Skills/js.png'),<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;require('../../Photos/Skills/mssql.png'),<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;require('../../Photos/Skills/nodejs.png'),<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;require('../../Photos/Skills/python.png'),<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;require('../../Photos/Skills/react.png'),<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;require('../../Photos/Skills/serverless.png'),<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;require('../../Photos/Skills/ts.png'),<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;require('../../Photos/Skills/vuejs.png'),<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;]<br />
                        &emsp;&emsp;&emsp;&emsp;&#125;);<br />
                        &emsp;&emsp;&#125;<br />
                        <br />
                        &emsp;&emsp;render() &#123;<br />
                        &emsp;&emsp;&emsp;&emsp;return &#60;div ref=&#123;el =&#62; this.el = el&#125; /&#62;;<br />
                        &emsp;&emsp;&#125;<br />
                        &#125;<br />
                    </code>
                </div>
            </div>
        );
    }
}