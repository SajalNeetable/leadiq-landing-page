import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class ProspectingPodcastHighFivesWithDanFrost extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Prospecting Podcast: High Fives with Dan Frost"
                    description="I sat down and talked with New Hampshire’s own, Dan Frost. Dan is a long time sales veteran who has prospects for well over 10+ years."
                    author="Ryan O’Hara"
                    date="Feb 22, 2018"
                    imageUrl="/img/powerpoint-bullshit.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter">
                                    <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/403546422&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true" wscrolling="no" />
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Get 100 of those free leads Ryan was talking about. Hit the button!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProspectingPodcastHighFivesWithDanFrost;