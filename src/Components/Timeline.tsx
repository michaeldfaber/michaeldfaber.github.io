import React, { Component } from 'react';
import './Timeline.css'
import { TimelineLeft } from './TimelineLeft';
import { TimelineRight } from './TimelineRight';

export class Timeline extends Component {
    render() {
        const firstBody =
            <div>
                <p>My high school days. I had known from very early on that I wanted to "work with computers", but the first lines of actual code I wrote were in high school.</p>
                <p>I loved Minecraft, and it blew my mind how I could change a video game just by copying, pasting, and tweaking a few Java files.</p>
                <p>I also took AP Computer Science. In that course I learned Java in a more formal and structured way.</p>
            </div>
        const secondBody =
            <div>
                <p>I began college at the University of Nebraska-Lincoln. I was originally a Computer Engineering major, but I switched to Mathematics because I found it incredibly interesting.</p>
                <p>In my CE courses, I wrote Java, C, SQL, and even Assembly, but the emphasis was academic CS concepts like algorithms and computer design.</p>
                <p>In my Mathematics courses, I wrote code in Matlab occasionally, but mostly solved proofs. Proofs really taught me how to think about and approach difficult problems.</p>
            </div>
        const thirdBody =
            <div>
                <p>The summer before my junior year, I decided to make a porfolio to hopefully get an internship I could work part time during the school year.</p>
                <p>I focused mainly on frontend. It was new and exciting because it isn't generally taught in college CS/CE programs. I also figured webites and webpages make for a better portfolio because companies can see and test what you've built in real time.</p>
                <p>I really fell in love with jQuery. I made two jQuery packages that have 1100+ downloads on npm. They're on my GitHub.</p>
            </div>
        const fourthBody =
            <div>
                <p>Creating a portfolio paid off and I started an internship at Assurity Life Insurance Company. I learned the ins and outs of life working in software. I met a lot of people that had a big impact on me.</p>
                <p>I built websites for internal use with Angular, and built Web APIs using .NET Core and Microsoft SQL Server.</p>
                <p>I spoke at some of my University's events about my internship and internships in general. My team also encouraged me to attend developer meetups.</p>
            </div>
        const fifthBody =
            <div>
                <p>I graduated from the University of Nebraska Lincoln, and Assurity offered me a position as a Software Developer I, which I accepted. I became a Software Developer II a bit over a year later but wasn't in that role for long.</p>
                <p>I was the tech lead for the project the new interns worked on. We made a wrapper API for DocuSign.</p>
                <p>It was cool to contribute to Assurity's "insurance as a service" vision and watch it grow. They have a set of APIs vendors can hit to create an insurance policy start to finish. That's what I mostly worked on.</p>
            </div>
        const sixthBody = 
            <div>
                <p>Just before the pandemic, I moved from the IT department to the Marketing department. They're a smaller team with more of a startup culture. My title there was Senior Frontend Developer.</p>
                <p>I wore many hats in this role. I filled their need for someone with a backend and DevOps skillset, despite the title. That was my primary responsibility. I also contributed to the VueJS work. I learned a lot about SEO and advertising.</p>
                <p>I loved it. I feel pressure from LinkedIn, Reddit, etc. to specialize, but I love working in different stacks and continously learning.</p>
            </div>
        const seventhBody = 
            <div>
                <p>It wasn't easy to leave Assurity. I grew a lot there, and had a lot of wild times. I'm even in one of their commercials!</p>
                <p>But, I decided it was time to move on and found a role at Phreesia that seemed really interesting and I was right. I'm now a DevSecOps Engineer there.</p>
                <p>I love my job here. The culture is fantastic, and it's very transparent that the work I contribute "moves the needle."</p>
                <p>There you have it!</p>
            </div>

        return (
            <div className="timeline">
                <div className="timeline-heading">
                    My Career
                </div>
                <div className="timeline-body">
                    <p>If you'd like a short, succinct summary of my career and all of the tools I've used, you can check out my <a href="https://raw.githubusercontent.com/michaeldfaber/michaeldfaber.github.io/master/Resume.pdf">resume</a>.</p>
                    <p>I've also created this timeline to visualize my history with software and wax poetic a little bit.</p>
                </div>
                <div className="timeline-elements">
                    <TimelineLeft
                        title="August 2010 - May 2014"
                        body={firstBody}
                        imagePath={require('../Photos/minecraft.jpg')}
                    />
                    <TimelineRight
                        title="August 2014"
                        body={secondBody}
                        imagePath={require('../Photos/unl.png')}
                    />
                    <TimelineLeft
                        title="May 2016"
                        body={thirdBody}
                        imagePath={require('../Photos/jquery.jpeg')}
                    />
                    <TimelineRight
                        title="September 2016"
                        body={fourthBody}
                        imagePath={require('../Photos/assurity.png')}
                    />
                    <TimelineLeft
                        title="May and June 2018"
                        body={fifthBody}
                        imagePath={require('../Photos/graduation.jpeg')}
                    />
                    <TimelineRight
                        title="December 2019"
                        body={sixthBody}
                        imagePath={require('../Photos/marketing.png')}
                    />
                    <TimelineLeft
                        title="September 2021"
                        body={seventhBody}
                        imagePath={require('../Photos/phreesia.png')}
                    />
                </div>
            </div>
        );
    }
}