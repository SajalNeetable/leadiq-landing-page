import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class ProspectingPodcastJeremyLeveille extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="Prospecting Podcast with Jeremy Leveille"
                    description="We sat down and talked with Jeremy Leveille, who is a practicing Channel Sales Manager at Navisite, and talked about how he prospects, exceeding his quota over the past few years."
                    author="Ryan O’Hara"
                    date="Aug 10, 2017"
                    imageUrl="/img/sunset-picture.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <p>The link will be available on <a href="https://itunes.apple.com/us/podcast/prospecting-podcast-by-leadiq/id1126111869?mt=2">iTunes here</a>.</p>

                                <div className="embed-responsive embed-responsive-16by9 text-cnter">
                                    <iframe  scrolling="no" title="video"  src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F337189115&amp;show_artwork=true&amp;maxwidth=1080&amp;maxheight=1000"/>
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

export default ProspectingPodcastJeremyLeveille;