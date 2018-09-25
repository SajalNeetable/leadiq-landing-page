import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class ProspectingPodcastHighFivesWithAmyVolas extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Prospecting Podcast: High Fives with Amy Volas"
                    description="Ryan O’Hara and Amy Volas dive into prospecting in the recruiting world, and how to practice good form to book more connections."
                    author="Ryan O’Hara"
                    date="Jul 17, 2018"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                             <div className="embed-responsive embed-responsive-16by9 text-cnter mt-5">
                                    <iframe scrolling="no"  src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F472885674&amp;show_artwork=true&amp;maxwidth=1080&amp;maxheight=1000"/>
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Get 100 free leads!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProspectingPodcastHighFivesWithAmyVolas;