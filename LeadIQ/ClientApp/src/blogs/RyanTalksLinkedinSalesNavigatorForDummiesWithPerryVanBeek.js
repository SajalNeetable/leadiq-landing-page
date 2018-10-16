import React from 'react';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import RyanOHara from '../components/RyanOHara';

class RyanTalksLinkedinSalesNavigatorForDummiesWithPerryVanBeek extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <BlogHeader
                    title="Ryan talks LinkedIn Sales Navigator for Dummies with Perry van Beek"
                    description="Ryan O’Hara sat down with social selling expert, Perry van Beek to talk about his new book, LinkedIn Sales Navigator for Dummies. On this episode they talk about inbound selling and outbound selling, and how to live off LinkedIn to build your pipeline."
                    author="Ryan O’Hara"
                    date="Sep 7, 2018"

                />

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">

                                <div className="embed-responsive embed-responsive-16by9 text-cnter mt-3">
                                    <iframe scrolling="no" title="video"  src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F496778331&amp;show_artwork=true&amp;maxwidth=1080&amp;maxheight=1000"/>
                                </div>

                                <p className="mt-3">If you’d like to check our Perry’s free course on how to use LinkedIn Sales Navigator, you can check it out here: <a href="https://www.social.one/">https://www.social.one/</a> </p>
                            </div>
                        </div>

                        <section className="text-center">
                            <p>Try 100 free leads of LeadIQ.</p>
                            <FreeLeads size="lg" />
                        </section>

                        <RyanOHara />

                    </div>
                </div>
            </div>
        );
    }
}

export default RyanTalksLinkedinSalesNavigatorForDummiesWithPerryVanBeek;