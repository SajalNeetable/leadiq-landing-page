import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class WhatAreYourSalesTeamsTalents extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="What Are Your Sales Team’s Talents?"
                    description="Any good sales manager or startup founder should do a talent audit of their sales team. When we interview Account Executives and Sales Development Representatives, we often ask them to share their stories, and understand how they got into sales."
                    author="Ryan O’Hara"
                    date="Mar 25, 2018"
                    imageUrl="/img/work-in-sales.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <h3>What did they do before sales? What do they do outside of work?</h3>

                                <p>No one ever said, “When I grow up, I wanna work in sales!”</p>

                                <p>Maybe there are some strange few out there who wanted to sell for a living, but sales teams are often a rag tag team of people with random backgrounds who accidentally stumbled into sales.</p>

                                <div className="card blog-card mt-3">
                                    <div className="card-body">
                                        <img src="/img/sales-crew-dressed.jpg" className="img-fluied" />
                                        <small className="justify-content-center row">In the early days of Dyn, our sales crew dressed as 80s detectives.</small>
                                    </div>
                                </div>

                                <p className="mt-3">For example, in the picture above, <a href="https://www.linkedin.com/in/diazmisael/">Misael</a> (left most in the picture above) was a model for Abercrombie & Fitch, and he had spent a few years being a golf caddie at some incredible golf courses.</p>

                                <p><a href="https://www.linkedin.com/in/brian-mccall-0876507/">Brian</a> was a system admin from Clemson, SC before joining Dyn. He played music, smoked meat, and photographed tons of bands from the Athens, GA music scene.</p>

                                <p><a href="https://www.linkedin.com/in/scotcha/">Scott</a> was active on several online web communities, a former EverQuest addict, lived and traveled everywhere from London to Provo.</p>

                                <p>And I was into playing synthesizers, piano, skateboarding, and making movies with my friends.</p>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe src="https://www.youtube.com/embed/XCCArevEIAY" scrolling="no" />
                                </div>

                                <em>Just doing a nosegrab. No big deal. </em>

                                <p className="mt-3">In that one photo, which was just a small sample set of our sales floor, Dyn had a deep pool of talent, connections, and expertise that didn’t overlap.</p>

                                <p>The point is, sales people are some of the most interesting people out there. Another example is one of our BDRs, Jeremy Leveille using his background in comedy to write some awful dad jokes for  a a prospect:</p>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe src="https://www.youtube.com/embed/QD6rPZv82vs" scrolling="no" />
                                </div>

                                <p className="mt-3">Take a deep dive into your sales team, and see if you can think of some cool prospecting ideas around what talents your team has. Send an email out asking your team members to give you three talents they have outside of work. Wrap around some campaigns for prospects that utilize your talents to impress your prospects.</p>

                                <p>It can be anything from playing a musical instrument, telling a funny joke, or a special ability that not everyone can do. If you play music, send a song. If you tell jokes, tell a joke. If you make great bbq, send it to a prospect. If you take great photos, send a cool photo to a prospect.</p>

                                <p>When someone’s prospecting using a cold email, their goal should be to make a good first impression, connect with the prospect on a personal level, and start a relationship with them. Using talents can actually produce some really cool cold email techniques.</p>

                                <p>Prospecting can be really fun, and tapping into your talent’s….uh…. well… their talent can produce some really solid results.</p>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe src="https://www.youtube.com/embed/8Eoe3e5tyTM" scrolling="no" />
                                </div>

                                <em>One of Dyn’s rep, Tom Denniston and I co-wrote a origin story about Dyn. We even used it for prospecting, and Tom even performed it at one of Dyn’s infamous DynTini’s. </em>

                                <p className="mt-3">If you or your sales team has any talents, use those talents to stand out and impress your cold prospects. Do something that makes prospects feel special.</p>

                                <p><a href="https://leadiq.com/learn/2017/05/how-we-turned-40percent-of-our-cold-email-into-meetings/" >A good example of this is the story of how I converted 40% of my cold emails into meetings.</a></p>

                                <p>I used my talent of playing piano to make really quick songs for prospecting.</p>

                                <p>The future of prospecting is about hand picking important accounts to break into, and doing a marketing tactic for that one prospect. Prospects want to feel loved. They want to feel good being prospected.</p>

                                <p>What are some of your sales team’s talents?</p>

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

export default WhatAreYourSalesTeamsTalents;