import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class TheProspectingPodcastEpisodeThreeHighFivesWithSendbloom extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="The Prospecting Podcast: Episode 3: High Fives with Sendbloom"
                    description="Hey Gang, Today we’re excited to announce Episode 3 of The Prospecting Podcast."
                    author="Ryan O'Hara"
                    date="Sep 15, 2016"
                    imageUrl="/img/thunderpunch.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div>
                                    <iframe title="video" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/leadiq/prospecting-podcast-3-high-fives-with-sendbloom&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false&amp;color=ff7700" width="100%" height="150" scrolling="no" />
                                </div>
                                <p className="mt-3">This episode features <a href="http://david@sendbloom.com/">David Sneider</a>, who runs Growth and Customer Success at <a href="http://sendbloom.com/">Sendbloom</a>.</p>

                                <p>If you don’t know about Sendbloom, go to their site and check them out. Dave is passionate and knows a ton about prospecting. We’ll learn about building multi-step prospecting campaigns, cool hacks we both use, and we even give a nice shoutout to <a href="http://textexpander.com/">TextExpander</a>.</p>

                                <p>You will also be able to download episode 3 on iTunes <a href="https://itunes.apple.com/us/podcast/prospecting-podcast-by-leadiq/id1126111869?mt=2">here</a>.</p>
                                <p>Happy Hunting! You can find some of other podcast below:</p>
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

export default TheProspectingPodcastEpisodeThreeHighFivesWithSendbloom;