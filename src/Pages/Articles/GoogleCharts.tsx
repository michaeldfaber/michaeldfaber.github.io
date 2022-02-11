import React, { Component } from 'react';
import './../../Styles/GoogleCharts.css';
import { Chart } from "react-google-charts";

export class GoogleCharts extends Component {
    render() {
        return (
            <div className="google-charts">
                <div className="google-charts-heading">
                    Data Visualization with Google Charts
                </div>
                <div className="google-charts-body">
                    <p>This page is for following along to an article I wrote <a href="https://michaeldfaber.medium.com/data-visualization-with-react-google-charts-82bc759d828f">here</a>. Check it out!</p>
                </div>

                <div className="google-charts-subheading">
                    Example #1: Pie Chart
                </div>
                <div className="google-charts-example">
                    <Chart
                        width={'100%'}
                        height={'500px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Language', 'Speakers (in millions)'],
                            ['Assamese', 13], ['Bengali', 83], ['Bodo', 1.4],
                            ['Dogri', 2.3], ['Gujarati', 46], ['Hindi', 300],
                            ['Kannada', 38], ['Kashmiri', 5.5], ['Konkani', 5],
                            ['Maithili', 20], ['Malayalam', 33], ['Manipuri', 1.5],
                            ['Marathi', 72], ['Nepali', 2.9], ['Oriya', 33],
                            ['Punjabi', 29], ['Sanskrit', 0.01], ['Santhali', 6.5],
                            ['Sindhi', 2.5], ['Tamil', 61], ['Telugu', 74], ['Urdu', 52]
                        ]}
                        options={{
                            legend: 'none',
                            pieSliceText: 'label',
                            slices: {   
                                4:  { offset: 0.2 },
                                12: { offset: 0.3 },
                                14: { offset: 0.4 },
                                15: { offset: 0.5 },
                            }
                        }}
                    />
                    <div className="google-charts-example-code">
                        <code>
                            &#60;Chart<br />
                            &emsp;&emsp;width=&#123;'100%'&#125;<br />
                            &emsp;&emsp;height=&#123;'500px'&#125;<br />
                            &emsp;&emsp;chartType="PieChart"<br />
                            &emsp;&emsp;loader=&#123;&#60;div&#62;Loading Chart&#60;/div&#62;&#125;<br />
                            &emsp;&emsp;data=&#123;[<br />
                            &emsp;&emsp;&emsp;&emsp;['Language', 'Speakers (in millions)'],<br />
                            &emsp;&emsp;&emsp;&emsp;['Assamese', 13], ['Bengali', 83], ['Bodo', 1.4],<br />
                            &emsp;&emsp;&emsp;&emsp;['Dogri', 2.3], ['Gujarati', 46], ['Hindi', 300],<br />
                            &emsp;&emsp;&emsp;&emsp;['Kannada', 38], ['Kashmiri', 5.5], ['Konkani', 5],<br />
                            &emsp;&emsp;&emsp;&emsp;['Maithili', 20], ['Malayalam', 33], ['Manipuri', 1.5],<br />
                            &emsp;&emsp;&emsp;&emsp;['Marathi', 72], ['Nepali', 2.9], ['Oriya', 33],<br />
                            &emsp;&emsp;&emsp;&emsp;['Punjabi', 29], ['Sanskrit', 0.01], ['Santhali', 6.5],<br />
                            &emsp;&emsp;&emsp;&emsp;['Sindhi', 2.5], ['Tamil', 61], ['Telugu', 74], ['Urdu', 52]<br />
                            &emsp;&emsp;]&#125;<br />
                            &emsp;&emsp;options=&#123;&#123;<br />
                            &emsp;&emsp;&emsp;&emsp;legend: 'none',<br />
                            &emsp;&emsp;&emsp;&emsp;pieSliceText: 'label',<br />
                            &emsp;&emsp;&emsp;&emsp;slices: &#123;<br />
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;4:  &#123; offset: 0.2 &#125;,<br />
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;12: &#123; offset: 0.3 &#125;,<br />
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;14: &#123; offset: 0.4 &#125;,<br />
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;15: &#123; offset: 0.5 &#125;,<br />
                            &emsp;&emsp;&emsp;&emsp;&#125;<br />
                            &emsp;&emsp;&#125;&#125;<br />
                            /&#62;<br />
                        </code>
                    </div>
                </div>
                
                <div className="google-charts-subheading">
                    Example #2: Scatter Chart
                </div>
                <div className="google-charts-example">
                    <Chart
                        chartType="ScatterChart"
                        width="100%"
                        height="400px"
                        data={[
                            ["Generation", "Descendants"],
                            [0, 1],
                            [1, 33],
                            [2, 269],
                            [3, 2013],
                        ]}
                        options={{
                            title: "Descendants by Generation",
                            hAxis: { title: "Generation", minValue: 0, maxValue: 3 },
                            vAxis: { title: "Descendants", minValue: 0, maxValue: 2100 },
                            trendlines: {
                              0: {
                                type: "exponential",
                                color: "green",
                              },
                            },
                        }}
                    />
                    <div className="google-charts-example-code">
                        <code>
                            &#60;Chart<br />
                            &emsp;&emsp;chartType="ScatterChart"<br />
                            &emsp;&emsp;width="100%"<br />
                            &emsp;&emsp;height="400px"<br />
                            &emsp;&emsp;data=&#123;[<br />
                            &emsp;&emsp;&emsp;&emsp;["Generation", "Descendants"],<br />
                            &emsp;&emsp;&emsp;&emsp;[0, 1],<br />
                            &emsp;&emsp;&emsp;&emsp;[1, 33],<br />
                            &emsp;&emsp;&emsp;&emsp;[2, 269],<br />
                            &emsp;&emsp;&emsp;&emsp;[3, 2013],<br />
                            &emsp;&emsp;]&#125;<br />
                            &emsp;&emsp;options=&#123;&#123;<br />
                            &emsp;&emsp;&emsp;&emsp;title: "Descendants by Generation",<br />
                            &emsp;&emsp;&emsp;&emsp;hAxis: &#123; title: "Generation", minValue: 0, maxValue: 3 &#125;,<br />
                            &emsp;&emsp;&emsp;&emsp;vAxis: &#123; title: "Descendants", minValue: 0, maxValue: 2100 &#125;,<br />
                            &emsp;&emsp;&emsp;&emsp;trendlines: &#123;<br />
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;0: &#123;<br />
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type: "exponential",<br />
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;color: "green",<br />
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#125;,<br />
                            &emsp;&emsp;&emsp;&emsp;&#125;,<br />
                            &emsp;&emsp;&#125;&#125;<br />
                            /&#62;<br />
                        </code>
                    </div>
                </div>
                <br />
                <br />
            </div>
        );
    }
}