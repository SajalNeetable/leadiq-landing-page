import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class MiniProspectingPodcastWithJeremyLeveille extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader
                    title="Mini Prospecting Podcast with Jeremy Leveille"
                    description="Jeremy Leveille and I were en route to Chicago taking the train to Logan Airport in Boston, and decided to record a short quick podcast."
                    author="Ryan O’Hara"
                    date="Apr 24, 2018"
                    imageUrl="/img/mini-podcast.jpg"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe scrolling="no"  src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F434439042&amp;show_artwork=true&amp;maxwidth=1080&amp;maxheight=1000"/>
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Get 100 of those fancy leads for free!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara/>

                    </div>
                </div>
            </div>
        );
    }
}

export default MiniProspectingPodcastWithJeremyLeveille;