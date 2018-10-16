import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class TheProspectingPodcastPodcastTwoHighFivesWithDavidWeisburd extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="The Prospecting Podcast: Podcast #2: High Fives with David Weisburd"
                    description="Podcast #2 of LeadIQ’s Prospecting Podcast is now available. This week, we talked with serial entrepreneur, David Weisburd."
                    author="Ryan O'Hara"
                    date="Aug 2, 2016"
                    imageUrl="/img/dns-fail.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div>
                                    <iframe className="border" title="video" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/leadiq/podcast-2-high-fives-with-david-weisburd&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false&amp;color=ff7700" width="100%" height="150" scrolling="no" />
                                </div>
                                <p className="mt-3">Podcast #2 will also be available for download on iTunes within the next 24 hours <a href="https://itunes.apple.com/us/podcast/prospecting-podcast-by-leadiq/id1126111869?mt=2">here</a>.</p>
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

export default TheProspectingPodcastPodcastTwoHighFivesWithDavidWeisburd;