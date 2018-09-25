import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import BlogAuthor from '../components/BlogAuthor';

class HowToMakeASuperTargetedAccountListForFreeForAccountBasedSelling extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="How to make a super-targeted account list for free for account-based selling"
                    description="At some point in your life as an SDR or AE, your boss will ask you to find some new accounts to go after; not just inbound leads, webinar leads, stuff sitting in your CRM, or up-selling existing accounts."
                    author="Cole Fox"
                    date="Jan 22, 2018"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <h3>Get the account-based edge to crush your quota</h3>
                                <p>
                                    Even if your boss doesn’t ask, if you really want the edge as that >100% quota-boaster, you need to get specific and targeted with your search. You’ll want to find accounts that match not only company size, 
                                    but perhaps sell B2B products, are at a certain level of investment stage, are in a specific location, have a certain department size that you sell into, or use a specific technology. You’ll obviously need to 
                                    figure out what to search for but I can at least guide you to some free-ish tools that will enable it.
                               </p>
                                <p>These under-utilized tools are perfect for finding accounts with the filters listed above.</p>

                                <h3 className="mt-3">It’s free</h3>
                                <p>All of these tools not only have free trials in which you can easily build a hefty, well-targeted account list on, but they do an amazing job of giving you accurate data on them too.</p>

                                <h3 className="mt-5">Get a solid kick-start in your prospecting</h3>

                                <p>If you’re just kicking off your sales efforts at a startup or trying to fight your way in a new territory at a mature company, these two tools will put you ahead of the curve.</p>

                                <h3 className="mt-5">Here’s a quick video walk-through:</h3>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe src="//play.vidyard.com/tbQfkfPTwtakirscbUu1b1.html?v=3.1.1"  scrolling="no" />
                                </div>

                                <h3 className="mt-3">Resources mentioned in the video:</h3>

                                <p>LinkedIn Sales Navigator trial <a href="https://business.linkedin.com/sales-solutions/sales-navigator#">here</a>.</p>

                                <p>AngelList companies <a href="https://angel.co/companies">here</a>.</p>

                                <p>Mattermark trial <a href="https://mattermark.com/app/signup/">here</a>.</p>

                                <p>Webscraper <a href="http://webscraper.io/">here</a>.</p>

                                <p><a href="https://www.linkedin.com/pulse/how-make-super-targeted-account-list-free-selling-tactical-cole-fox/">This post first appeared on Cole Fox’s Weekly Sales Hacks. </a></p>


                            </div>
                        </div>

                        <section className="text-center">
                            <p>We're giving away a 7-day FREE trial! Sign up right now!</p>
                            <FreeLeads size="lg" />
                        </section>
                        <BlogAuthor
                            author="Cole Fox"
                            imageUrl="/img/cole-fox.png"
                            profile="Cole Fox has spent the past 6 years learning B2B sales hacks. From being an early sales rep at LinkedIn, to working various startups, to building one of the largest hackathons in the Bay Area, Cole is always learning and trying new ways to maximize his sales process. You can reach Cole by emailing him Cole@Leadiq.Com" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HowToMakeASuperTargetedAccountListForFreeForAccountBasedSelling;