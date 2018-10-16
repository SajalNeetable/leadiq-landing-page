import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class ProspectingPodcastSellingIntoHrWithSonyaMeloff extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="Prospecting Podcast: Selling into HR with Sonya Meloff"
                    description="Today we talked with Sonya Meloff about her story and how she learned about selling as an early employee at Monster.com. We also talk about things she’s learned starting her own sales recruiting firm, the Sales Talent Agency, and being sold to all the time by sales reps"
                    author="Ryan O’Hara"
                    date="Apr 18, 2018"
                    imageUrl="/img/prospecting-sonya.png"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter">
                                    <iframe title="video" src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F431647311&amp;show_artwork=true&amp;maxwidth=1080&amp;maxheight=1000" scrolling="no" />
                                </div>

                            </div>
                        </div>

                        <section className="text-center">
                            <p>Get 100 leads for every person on your team..right now!</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>
        );
    }
}

export default ProspectingPodcastSellingIntoHrWithSonyaMeloff;