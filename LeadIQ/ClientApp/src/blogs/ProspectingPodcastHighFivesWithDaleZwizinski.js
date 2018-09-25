import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class ProspectingPodcastHighFivesWithDaleZwizinski extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Prospecting Podcast: High Fives with Dale Zwizinski"
                    description="A few years back, I first met Dale when he was working at a competitor of ours, Kitedesk. I loved the content and posts that Dale made so I asked him to be on our podcast. Now working at Oracle, Dale I deep dove into what makes a good prospecting, and how it differs with big vs. small companies, a place Dale has deep experience with."
                    author="Ryan O'Hara"
                    date="Feb 1, 2018"
                    imageUrl="/img/dale-zwizinski.png"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>Here it is:</p>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe scrolling="no" src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F393017778&amp;show_artwork=true&amp;maxwidth=1080&amp;maxheight=1000" />
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

export default ProspectingPodcastHighFivesWithDaleZwizinski;