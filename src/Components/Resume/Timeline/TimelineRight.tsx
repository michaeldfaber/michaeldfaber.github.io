import React, { Component } from 'react';
import './TimelineRight.css';
import { TimelineElementProps } from '../../../Types/TimelineElementProps';

export class TimelineRight extends Component<TimelineElementProps, any> {
    render() {
        return (
            <div className="timeline-right">
                <div className="timeline-right-body-container">
                    <div className="timeline-right-body">
                        {this.props.body}
                    </div>
                </div>
                <div className="timeline-right-line-container">
                    <div className="timeline-right-vertical-line"></div>
                    <div className="timeline-right-horizontal-line"></div>
                </div>
                <div className="timeline-right-image">
                    <div className="timeline-right-heading">
                        {this.props.title}
                    </div>
                    <div className="timeline-right-photo-container">
                        <img className="timeline-right-photo" src={this.props.imagePath} />
                    </div>
                </div>
            </div>
        );
    }
}