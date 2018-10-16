import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class SendSalesEmailsGetReplies extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="Send Sales Emails That Get Replies"
                    description="A few weeks back, Cole Fox and I presented and attended the AA-ISP Leadership Summit in Chicago, and were thrilled to see podcaster Will Barron doing his live version of The Salesman Podcast, with the help of our friends at Hubspot."
                    author="Ryan O’Hara"
                    date="May 12, 2017"
                    imageUrl="/img/sales-man-podcast-live.png"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>For those that don’t know Will, Will is probably the best sales podcaster out there. Between working super hard, listening to new ideas, and digging up great speakers, it’s hard to beat his content. You should definitely take a listen to what Will is doing.</p>
                                <p>Sales is changing, and Will gets it. We’re all up against the machines, and we’re on a mission to try and beat the machines to save selling for humanity.</p>
                                <p>Imagine a world where prospects like getting prospected? Selling is all about being human, and you can’t outsource that, or train automation to do it.</p>
                                <p>That’s some of the things we talk about on the most recent episode of Will’s podcast, along with how our team gets double digit reply rate.</p>
                                <p>Take a listen below:</p>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter">
                                    <iframe src="https://www.youtube.com/embed/mRyMzzNKBSY" title="video" scrolling="no" />
                                </div>

                                <p>Some other things we talk about:</p>

                                <li>Why researching leads upfront means your more effective at the closing stage</li>
                                <li>Why you should share your emails you write with colleagues, and even friends?</li>
                                <li>You need to give more than take when you prospect.</li>

                                <p className="mt-3">If you want to take a listen to our Prospecting Podcast:</p>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter">
                                    <iframe scrolling="no" title="video"  src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F234251733&amp;show_artwork=true&amp;maxwidth=1080&amp;maxheight=1000"/>
                                </div>

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

export default SendSalesEmailsGetReplies;