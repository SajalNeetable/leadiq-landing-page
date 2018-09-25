import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class AddLeadsIntoSalesloftCadencesWithLeadiq extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Add Leads Into SalesLoft Cadences with LeadIQ"
                    author="Ryan O'Hara"
                    date="May 5, 2017"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <h3>Today we’re proud to announce that we’re publicly launching our SalesLoft Integration.</h3>
                                <p>Let’s start by letting you know why we’ve decided to integrate with SalesLoft.</p>
                                <p>Two years ago, we launched LeadIQ with one simple goal:</p>

                                <p className="mt-3"><strong><i>How do we get sales reps to enjoy prospecting?</i></strong></p>
                                <p>
                                    Analyzing prospectors’ workflow and their pain points, we realized that it takes a prospector way too much work to reach out to a new account. The average sales development rep (SDR) has to do more than 15
                                    steps just to make a call or email a new prospect. What’s even worse is that after all that work, 30% of the emails bounce and never reach the prospect’s inbox.
                               </p>
                                <p>Add these complications into the big challenge of getting someone to respond, it’s no wonder 60% of sales reps won’t hit their quota this month. They deserve better.</p>
                                <p>That’s why LeadIQ has been focusing on automating all the non-creative parts of prospecting.</p>

                                <h3 className="mt-5">How will this integration help customers?</h3>
                                <p>This means that all LeadIQ and SalesLoft customers will be able to browse the web, find prospect contact data, and add leads and contacts into SalesLoft with minimal effort.</p>
                                <p>Together we can cut down then average amount of actions to reach out to a new prospect from 15 to 3, which will save mutual customers several days of work a month.</p>

                                <div className="card blog-card mt-3">
                                    <div className="card-body">
                                        <img src="" className="img-fluied" />
                                        <small className="justify-content-center row">Today we’re announcing our integration with SalesLoft</small>
                                    </div>
                                </div>

                                <h3 className="mt-5">Here’s some of the highlights of the integration.</h3>
                                <p><strong>Adding prospects right from the web into a cadence.</strong></p>
                                <p>With LeadIQ, reps now are able to browse the web, know what prospects are in Salesforce, and if they aren’t in Salesforce, find and import their contact’s data directly into the SalesLoft cadence of their choice. Users can tag their leads too from LeadIQ.</p>

                                <div className="card blog-card mt-3">
                                    <div className="card-body">
                                        <img src="" className="img-fluied" />
                                        <small className="justify-content-center row">LeadIQ customers can now send leads right into a SalesLoft Cadence.</small>
                                    </div>
                                </div>

                                <p>With this integration, customers can automatically add someone to a cadence when LeadIQ finds a prospect’s verified contact data from the extension. If they prefer to not automatically add a lead to a cadence, they can manually add a prospect right into a cadence with one easy click from the extension as well.</p>
                                <p><strong>Adding LeadIQ prospect lists into a cadence.</strong></p>
                                <p>If a rep prefers to build their prospecting lists first, and send the list right into a cadence after, they’ll be able to focus on building their prospect lists, then export that list in bulk to a cadence.</p>

                                <div className="card blog-card mt-3">
                                    <div className="card-body">
                                        <img src="" className="img-fluied" />
                                        <small className="justify-content-center row">Build a great prospect list, and send those prospects right into a SalesLoft Cadence from the IQ Sheet.</small>
                                    </div>
                                </div>

                                <p className="mt-3"><strong>Duplicate Detection</strong></p>
                                <p>LeadIQ’s Salesforce duplicate detection was designed to prevent reps from having conflicts with each other, and helping Sales Operations keep a clean Salesforce by stopping duplicate leads from being imported. Today customers will be able to do the same with adding leads into SalesLoft.</p>
                                <p>LeadIQ will detect existing prospects in cadences across your entire SalesLoft team, and warn reps before adding them into a cadence.</p>

                                <div className="card blog-card mt-3">
                                    <div className="card-body">
                                        <img src="" className="img-fluied" />
                                        <small className="justify-content-center row">As much as we all like seeing who would win in a fight, LeadIQ will keep peace and harmony on your sales teams, preventing reps from adding someone to a cadence who is already in a cadence.</small>
                                    </div>
                                </div>

                                <h3 className="mt-5">Over the past few months, we’ve had a blast working the SalesLoft team, and beta-testers love it too.</h3>

                                <p>“We love the efficiency that is gained when we use LeadIQ’s SalesLoft integration. Best list builder on the market + best tool for outbounding = $$$!”</p>

                                <p>-Zach Barney, Director of Sales Development at <a href="http://teem.com">Teem</a>.</p>
                                <p>“The Salesloft LeadIQ integration is extremely helpful. The ability to move a prospect directly from LinkedIn into a cadence with the click of a button is a game changer!”</p>

                                <p>–Ryan Donnelly, SDR at <a href="http://adstage.io">AdStage</a>.</p>

                                <h3 className="mt-5">Requirements</h3>
                                <p>In order to use LeadIQ Salesloft Integration, customers need to be on LeadIQ’s Sales Plan or the LeadIQ’s Enterprise Plan. For more information on how to upgrade send an email to <a href="mailto:sales@leadiq.com">sales@leadiq.com</a></p>

                                <p>For documentation and instructions on setting up the integration, visit our<a href="https://leadiqhelp.zendesk.com/hc/en-us/articles/115006699628-SalesLoft-and-LeadIQ"> Support Page.</a></p>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>We're giving away a 7-day FREE trial! Sign up right now!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>
        );
    }
}

export default AddLeadsIntoSalesloftCadencesWithLeadiq;