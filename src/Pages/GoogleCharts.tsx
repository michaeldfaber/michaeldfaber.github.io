import React, { Component } from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import { GoogleChartsExamples } from '../Components/GoogleChartsExamples/GoogleChartsExamples';

export class GoogleCharts extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <GoogleChartsExamples />
            </div>
        );
    }
}