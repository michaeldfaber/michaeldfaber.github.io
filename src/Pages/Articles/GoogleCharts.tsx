import React, { Component } from 'react';
import { Navbar } from '../../Components/Layout/Navbar';
import { GoogleChartsExamples } from '../../Components/Articles/GoogleChartsExamples/GoogleChartsExamples';

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