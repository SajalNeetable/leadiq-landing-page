import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class KitedeskIsShuttingDown extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="KiteDesk Is Shutting Down: What Are Your Options?"
                    description="Last week, we had tons of people reaching out to us about KiteDesk shutting down.  We first heard about the shut down last week from one of our customers after they received an Intercom message. We reached out to Kitedesk folks, who confirmed the shutdown."
                    author="Ryan O’Hara"
                    date="May 1, 2017"
                    imageUrl="/img/sunset.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="card blog-card mt-3">
                                    <div className="card-body">
                                        <img src="" className="img-fluied" />
                                        <small className="justify-content-center row">A customer of ours sent us this message they received off the KiteDesk website last week.</small>
                                    </div>
                                </div>

                                <p>
                                    We’re actually really bummed this is happening. Competition is one of the most important drivers for helping innovation, especially in the sales space. In fact, it was actually a pretty crazy week in the prospecting world,
                                    between this and <a href="http://fortune.com/2017/04/19/marketo-is-acquiring-toutapp/">ToutApp announcing they’ve been acquired by Marketo.</a>
                                </p>

                                <p>
                                    We respect the team at KiteDesk a ton, and we’re sorry to see them go. From our experiences socializing and mingling with some of their folks, KiteDesk has fantastic talent there, and if anyone is looking to fill their teams,
                                    we highly recommend talking with some of <a href="https://www.linkedin.com/search/results/people/?facetCurrentCompany=%5B%222413356%22%5D&origin=FACETED_SEARCH">these folks here</a> about joining your team.
                                </p>

                                <p>Today, we want to share some information about what we know, and what vendor options you can use to replace KiteDesk.</p>

                                <h3 className="mt-5">KiteDesk has two main products their customers use them for, <strong>FIND and FLOW</strong>.</h3>
                                <p>If you used their FIND tool, it means you used KiteDesk’s platform to find contact data, and send it into their flow tool.</p>
                                <p>If you used their FLOW tool, it means you likely need to find a replacement tool that allows your reps to send a series of emails and calls to their prospects.</p>
                                <p>The good news is, a lot of customers actually used KiteDesk for both products, and we have a way you can replace both.</p>

                                <h3 className="mt-5">Here are some tools that could potentially replace their FIND tool:</h3>
                                <p><strong>Zoominfo: </strong>If you are on the hunt for a lead database, Zoominfo is kind of the big one we come across a lot. Their focus is on direct dials, if you prospect off the phone a bit more, they could be a good option for your team.</p>
                                <p><strong>Node.io: </strong>Node is a great tool to use if you were using KiteDesk to find new accounts to prospect. Node will go through your existing Salesforce data and find account list for your team to prospect.</p>
                                <p><strong>DiscoverOrg:</strong> DiscoverOrg focuses on having a quality dataset vs. quantity. They also have a decent company hierarchy that will tell you details about account’s org charts.</p>
                                <p><strong>LeadIQ (Us): </strong>Yeah you knew it was coming. Our main focus is finding leads in real time, telling you who’s in Salesforce already, and then sending that data into your different sales tools.</p>

                                <h3 className="mt-5">Here are some tools that could potentially replace their FLOW tool:</h3>

                                <p>
                                    <a href="http://salesloft.com">SalesLoft:</a> SalesLoft used to have a product that was sort of like the KiteDesk FIND tool, but they’ve spent the past few years working on making a really clean workflow for prospectors to put leads into, and automatically pulling leads out of the
                                    workflow when they reply. All their activities and replies will get tracked into Salesforce via plugging into your inbox. We use SalesLoft internally for our prospecting team here at LeadIQ, specifically working off their cadences.
                                 </p>

                                <p>
                                    <a href="http://outreach.io">Outreach: </a>Outreach is one of sales team’s favorite prospecting tool over the past two years. We sort of view Outreach as a way for a sales rep to turn into a 1 person marketing automation machine,
                                    except focused on prospecting. Some of our favorite features with Outreach is their automatic sequences of emails and calls based on Salesforce triggers, their out of office reply detection, and similar to SalesLoft, their inbox reply tracking.
                                </p>

                                <p>Both of these tools are more tools you work out of, as oppose to some of the other tools out there that compliment your inbox more.</p>

                                <p>Tools that compliment your inbox vs. working off these tools:</p>

                                <p>If you need something with less seats, or are super price sensitive, feel free to also explore <a href="http://yesware.com">YesWare</a>, <a href="http://toutapp.com">ToutApp</a>, and <a href="http://mixmax.com">MixMax</a>. These tools have a very different workflow than SalesLoft and Outreach, but are simpler to use since they have less features focused workflow.</p>

                                <p>They’ll track opens, clicks, and replies, but mainly work out of your inbox.</p>

                                <h3 className="mt-5">Replacing FIND and FLOW together:</h3>

                                <p>Lastly, if you are working on trying to find a way to replace both pieces of the puzzle together, LeadIQ actually has a beta integration in the works with SalesLoft and Outreach.</p>

                                <p>This is an example of how our SalesLoft integration works. If you sync up SalesLoft, you’ll be able to directly add leads right into a cadence. Our Outreach integration is almost identical, allowing you to import leads into a sequence. Here’s what it looks like working with SalesLoft:</p>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe src="//play.vidyard.com/dQB7WTEJ7BWwPhwGmJ41kc.html?v=3.1.1" scrolling="no" />
                                </div>

                                <p><a href="sales@leadiq.com">If you want to try out either integration and see if it can help your team send an email to sales@leadiq.com</a></p>


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

export default KitedeskIsShuttingDown;