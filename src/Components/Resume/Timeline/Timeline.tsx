import React, { Component } from 'react';
import './Timeline.css'
import { TimelineLeft } from './TimelineLeft';
import { TimelineRight } from './TimelineRight';

export class Timeline extends Component {
    render() {
        const firstTitle =
            <div>
                <p>High School</p>
                <p className="timeline-title-subheading">August 2010 - May 2014</p>
            </div>
        const firstBody =
            <div>
                <p>I had known from very early on that I wanted to "work with computers", but the first lines of actual code I wrote were in high school.</p>
                <p>I loved Minecraft, and it blew my mind how I could change a video game just by copying, pasting, and tweaking a few Java files.</p>
                <p>I also took AP Computer Science, an introduction to object oriented programming and algorithms in Java.</p>
            </div>
        
        const secondTitle =
            <div>
                <p>University of Nebraska-Lincoln</p>
                <p className="timeline-title-subheading">August 2014 - May 2018</p>
            </div>
        const secondBody =
            <div>
                <p>Originally, I was a Computer Engineering major. I switched to Mathematics after three semesters because I found it incredibly interesting.</p>
                <p>In my CE courses, I wrote Java, C, SQL, and Assembly. The emphasis was academic CS concepts like algorithms and computer design.</p>
                <p>In my Mathematics courses, I wrote code in Matlab occasionally, but mostly solved proofs. Proofs really taught me how to think about and approach difficult problems.</p>
            </div>
        
        const thirdTitle = 
            <div>
                <p>First Portfolio</p>
                <p className="timeline-title-subheading">Summer of 2016</p>
            </div>
        const thirdBody =
            <div>
                <p>I decided to make my first set of personal projects to hopefully get an internship I could work part time during the school year.</p>
                <p>I built frontend projects. Frontend development was new and exciting because it isn't generally taught in college CS/CE programs. I also figured webites and webpages make for a better portfolio because anyone can see, understand, and test what you've built in real time.</p>
                <p>I really fell in love with jQuery. I made two jQuery packages that have 1100+ downloads on npm. They're on my GitHub.</p>
            </div>
        
        const fourthTitle =
            <div>
                <p>Software Development Internship - Assurity</p>
                <p className="timeline-title-subheading">September 2016 - June 2018</p>
            </div>
        const fourthBody =
            <div>
                <p>Creating a portfolio paid off and I started an internship at Assurity Life Insurance Company. I learned the ins and outs of life working in software. I met a lot of people that had a big impact on me.</p>
                <p>I built websites for internal use with Angular, and built Web APIs using .NET Core and Microsoft SQL Server.</p>
                <p>I spoke at some of my University's events about my internship and internships in general. My team also encouraged me to attend developer meetups.</p>
            </div>

        const fifthTitle =
            <div>
                <p>Software Developer - Assurity</p>
                <p className="timeline-title-subheading">June 2018 - December 2019</p>
            </div>
        const fifthBody =
            <div>
                <p>I graduated from the University of Nebraska Lincoln. Assurity offered me a full time position, which I accepted.</p>
                <p>It was cool to contribute to Assurity's "insurance as a service" vision and watch it grow. They have a set of APIs that can be hit by themselves or vendors to create an insurance policy start to finish. That's what I mostly worked on.</p>
                <p>I also lead the team of internship to create a Web API for DocuSign, and upgraded Team Foundation Server 2016 to Azure DevOps 2019.</p>
            </div>
        
        const sixthTitle =
            <div>
                <p>Senior Frontend Developer - Assurity</p>
                <p className="timeline-title-subheading">December 2019 - September 2021</p>
            </div>
        const sixthBody = 
            <div>
                <p>I moved from the IT department to the Marketing department. They're a smaller team with more of a startup culture.</p>
                <p>I wore many hats in this role. I filled their need for someone with a backend and DevOps skillset, despite the title. I also contributed to the Angular and VueJS work.</p>
                <p>It was cool to build websites that consumed the APIs I had worked on when in IT. I learned a lot about accessibility, SEO, and online advertising.</p>
            </div>
        
        const seventhTitle =
            <div>
                <p>DevSecOps Engineer - Phreesia</p>
                <p className="timeline-title-subheading">September 2021 - Present</p>
            </div>
        const seventhBody = 
            <div>
                <p>I decided it was time to move on from Assurity and started a new role at Phreesia, a SaaS company that builds tools for healthcare organizations.</p>
                <p>My primary project is building a Microsoft Teams App in React and TypeScript to consume and visualize information and events from security tools. It runs on Azure.</p>
                <p>I also build AWS Lambdas with Golang, Python, and Serverless, and manage their associated resources.</p>
            </div>

        return (
            <div className="timeline">
                <div className="timeline-heading">
                    My Career
                </div>
                <div className="timeline-body">
                    <p>Waxing poetic on my history with software.</p>
                </div>
                <div className="timeline-elements">
                    <TimelineLeft
                        title={firstTitle}
                        body={firstBody}
                        imagePath={require('../../Photos/Timeline/minecraft.jpg')}
                    />
                    <TimelineRight
                        title={secondTitle}
                        body={secondBody}
                        imagePath={require('../../Photos/Timeline/unl.png')}
                    />
                    <TimelineLeft
                        title={thirdTitle}
                        body={thirdBody}
                        imagePath={require('../../Photos/Timeline/jquery.jpeg')}
                    />
                    <TimelineRight
                        title={fourthTitle}
                        body={fourthBody}
                        imagePath={require('../../Photos/Timeline/assurity.png')}
                    />
                    <TimelineLeft
                        title={fifthTitle}
                        body={fifthBody}
                        imagePath={require('../../Photos/Timeline/graduation.jpeg')}
                    />
                    <TimelineRight
                        title={sixthTitle}
                        body={sixthBody}
                        imagePath={require('../../Photos/Timeline/marketing.png')}
                    />
                    <TimelineLeft
                        title={seventhTitle}
                        body={seventhBody}
                        imagePath={require('../../Photos/Timeline/phreesia.png')}
                    />
                </div>
            </div>
        );
    }
}