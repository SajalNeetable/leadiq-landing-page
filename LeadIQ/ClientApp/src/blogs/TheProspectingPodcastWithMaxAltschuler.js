import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class TheProspectingPodcastWithMaxAltschuler extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="High Fives with Max Altschuler"
                    description="Ryan sits down and talks about being a sales hacker and hacking your sales career with Max Altschuler, VP of Marketing of Outreach, and CEO of SalesHacker."
                    author="Ryan O'Hara"
                    date="Aug 6, 2018"
                    imageUrl="/img/max-altschuler.png"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-5">
                                    <iframe  scrolling="no"  src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F481936290&amp;show_artwork=true&amp;maxwidth=1080&amp;maxheight=1000"/>
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Here's 100 leads. You will not get lead poisoning.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>
        );
    }
}

export default TheProspectingPodcastWithMaxAltschuler;