import React, { Component } from 'react';
import './../../../Styles/Resume/Timeline/TimelineLeft.css';
import { TimelineElementProps } from '../../../Types/TimelineElementProps';

export class TimelineLeft extends Component<TimelineElementProps, any> {
    render() {
        return (
            <div className="timeline-left">
                <div className="timeline-left-image">
                    <div className="timeline-left-heading">
                        {this.props.title}
                    </div>
                    <div className="timeline-left-photo-container">
                        <img className="timeline-left-photo" src={this.props.imagePath} />
                    </div>
                </div>
                <div className="timeline-left-line-container">
                    <div className="timeline-left-horizontal-line"></div>
                    <div className="timeline-left-vertical-line"></div>
                </div>
                <div className="timeline-left-body-container">
                    <div className="timeline-left-body">
                        {this.props.body}
                    </div>
                </div>
            </div>
        );
    }
}