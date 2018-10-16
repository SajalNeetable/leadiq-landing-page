import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class ProspectingPodcastMarylouTyler extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="Prospecting Podcast with Marylou Tyler"
                    description="Last month, we sat down and talked with Marylou Tyler, co-author of Predictable Revenue, and had her on The Prospecting Podcast."
                    author="Ryan O’Hara"
                    date="Apr 12, 2017"
                    imageUrl="/img/sun-grid.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter">
                                    <iframe scrolling="no" title="video" src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F315443081&amp;show_artwork=true&amp;maxwidth=1080&amp;maxheight=1000" />
                                </div>

                                <p className="mt-3">In the past, we’ve spent a lot of time on prospecting tactics, sales tools, hacks to be more efficient, and how to deal with objections. We decided this time around to focus on something else; strategically deciding who is best to prospect.</p>
                                <p>On this episode of the Prospecting Podcast, Marylou and Ryan talk about picking the right accounts when prospecting. This was major theme as teams shift into account based prospecting, and account based selling.</p>
                                <p>Marylou spent a ton of time conducting research for her new book,  Predictable Prospecting, and so we discussed some of the research as well. Take a listen below.</p>
                                <p>You can also download the <a href="https://itunes.apple.com/us/podcast/prospecting-podcast-by-leadiq/id1126111869?mt=2">podcast off iTunes here</a>.</p>

                                <div className="card blog-card mt-3">
                                    <div className="card-body">
                                        <img src="/img/Predictable-Prospecting.png" className="img-fluied" alt="Predictable-Prospecting" />
                                        <small className="justify-content-center row">Marylou Tyler’s new book, Predictable Prospecting</small>
                                        <h3>If you are interested in Marylou’s book you can find it here on <a href="https://www.amazon.com/Predictable-Prospecting-Radically-Increase-Pipeline/dp/1259835642">Amazon</a>:</h3>
                                        <em><strong>“The proven system for rapid B2B sales growth from the coauthor of Predictable Revenue, the breakout bestseller hailed as a “sales bible” (Inc.com)</strong></em>
                                        <p>
                                            <em>
                                                If your organization’s success is driven by B2B sales, you need to be an expert prospector to successfully target, qualify, and close business opportunities. This game-changing guide provides
                                                the immediately implementable strategies you need to build a solid, sustainable pipeline ― whether you’re a sales or marketing executive, team leader, or sales representative.
                                            </em>
                                        </p>
                                        <p className="mt-3">Based on the acclaimed business model that made Predictable Revenue a runaway bestseller, this powerful approach to B2B prospecting will help you to:</p>
                                        <p>
                                            <em><li>Identify the prospects with the greatest potential</li>
                                                <li>Clearly articulate your company’s competitive position</li>
                                                <li>Implement account-based sales development using ideal account profiles</li>
                                                <li>Refine your lead targeting strategy with an ideal prospect profile</li>
                                                <li>Start a conversation with people you don’t know</li>
                                                <li>Land meetings through targeted campaigns</li>
                                                <li>Craft personalized e-mail and phone messaging to address each potential buyer’s awareness, needs, and challenges.</li>
                                                <li>Define, manage, and optimize sales development performance metrics</li>
                                                <li>Generate predictable revenue</li></em></p>
                                            <p className="mt-3">
                                                <em>You’ll learn how to target and track ideal prospects, optimize contact acquisition, continually improve performance, and achieve your revenue goals―quickly, efficiently, and predictably.
                                                    The book includes easy-to-use charts and e-mail templates, and features full online access to sample materials, worksheets, and blueprints to add to your prospecting tool kit.
                                                    </em>
                                        </p>
                                        <p>
                                            <em>Following this proven step-by-step framework, you can turn any B2B organization into a high-performance business development engine, diversify marketing lead generation channels, justify marketing ROI,
                                                sell into disruptive markets―and generate more revenue than ever. That’s the power of Predictable Prospecting.”
                                                </em>
                                        </p>
                                        <p><em>To read more about Marylou, visit <a href="http://maryloutyler.com/">maryloutyler.com/</a></em></p>
                                        <p>To get 50 free credits of LeadIQ, hit the <a href="https://chrome.google.com/webstore/detail/befngoippmpmobkkpkdoblkmofpjihnk">TRY IT NOW</a> button above.</p>

                                    </div>
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

export default ProspectingPodcastMarylouTyler;