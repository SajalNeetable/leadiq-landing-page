import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class ProspectingPodcastHighFivesWithChristopherSweat extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="Prospecting Podcast: High Fives with Christopher Sweat"
                    description="Ryan O’Hara sits down with Christopher Sweat, a Senior Consultant at StemFlow and talked about high volume prospecting when you work at a large company."
                    author="Ryan O’Hara"
                    date="May 31, 2018"
                    imageUrl="/img/christopher-image.png"
                />
                
                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter">
                                    <iframe src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F451769580&amp" title="video" scrolling="no" /></div>
                                </div>
                        </div>

                        <section className="text-center">
                            <p>Get 100 free leads.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />
                    </div>
                </div>
            </div>
               );
    }
}

export default ProspectingPodcastHighFivesWithChristopherSweat;