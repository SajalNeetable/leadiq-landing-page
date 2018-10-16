import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class TalkingAboutCampaignBasedProspectingAtFlipmyfunnel extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="Talking About Campaign Based Prospecting at FlipMyFunnel"
                    description="Hey Everyone! I’m not sure if you saw this, but FlipMyFunnel is doing an event in Boston. The event is pretty cool, but one of the smart things they are doing to promote it is asking for user generated videos where potential speakers pitch a 10 minute talk they want to do at the conference. I decided to throw my hat in the ring with this video:"
                    author="Ryan O’Hara"
                    date="Apr 24, 2018"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe src="https://www.youtube.com/embed/qAh__kN4SWA" title="video" scrolling="no" />
                                </div>

                                <p className="mt-3">If you follow what we are up to here, we think that Campaign Based Prospecting has a really cool future, especially as companies adopt account based marketing and account based selling. I want to show some examples of how Campaign Based Prospect can work, and make prospects feel loved.</p>

                                <p>If you’d like to contribute and upvote to help us get a chance to show the world this approach, hit the button below to upvote our video! Hopefully this video makes you laugh!</p>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Upvote Ryan's video so he can talk!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>
        );
    }
}

export default TalkingAboutCampaignBasedProspectingAtFlipmyfunnel;